const Job = require("../models/Job");
const Application = require("../models/Application");
const { sendApplicationConfirmation, sendApplicationNotification } = require("../utils/mailer");

// Public: only active roles, newest first. Used by the live careers page.
async function getPublicJobs(req, res) {
  try {
    const jobs = await Job.find({ isActive: true }).sort({ postedDate: -1 }).lean();
    return res.json({ jobs });
  } catch (err) {
    console.error("getPublicJobs error:", err);
    return res.status(500).json({ message: "Failed to load open roles." });
  }
}

// Admin: everything, including inactive, with real applicant counts.
async function listJobsAdmin(req, res) {
  try {
    const jobs = await Job.find({}).sort({ postedDate: -1 }).lean();

    const counts = await Application.aggregate([
      { $group: { _id: "$job", count: { $sum: 1 } } },
    ]);
    const countMap = new Map(counts.map((c) => [String(c._id), c.count]));

    const jobsWithCounts = jobs.map((j) => ({
      ...j,
      applicantsCount: countMap.get(String(j._id)) || 0,
    }));

    return res.json({ jobs: jobsWithCounts });
  } catch (err) {
    console.error("listJobsAdmin error:", err);
    return res.status(500).json({ message: "Failed to load roles." });
  }
}

function validateJobBody(body) {
  const { team, role, location, type } = body;
  if (!team || !team.trim()) return "Category/team is required.";
  if (!role || !role.trim()) return "Role title is required.";
  if (!location || !location.trim()) return "Location is required.";
  if (!type || !type.trim()) return "Employment type is required.";
  return null;
}

async function createJob(req, res) {
  try {
    const error = validateJobBody(req.body);
    if (error) return res.status(400).json({ message: error });

    const {
      team, role, location, type,
      description = "", applyUrl = "",
      postedDate, isActive = true,
    } = req.body;

    const job = await Job.create({
      team: team.trim(),
      role: role.trim(),
      location: location.trim(),
      type: type.trim(),
      description: description.trim(),
      applyUrl: applyUrl.trim(),
      postedDate: postedDate ? new Date(postedDate) : new Date(),
      isActive: !!isActive,
    });

    return res.status(201).json({ job });
  } catch (err) {
    console.error("createJob error:", err);
    return res.status(500).json({ message: "Failed to create role." });
  }
}

async function updateJob(req, res) {
  try {
    const { id } = req.params;
    const error = validateJobBody(req.body);
    if (error) return res.status(400).json({ message: error });

    const {
      team, role, location, type,
      description = "", applyUrl = "",
      postedDate, isActive = true,
    } = req.body;

    const job = await Job.findByIdAndUpdate(
      id,
      {
        team: team.trim(),
        role: role.trim(),
        location: location.trim(),
        type: type.trim(),
        description: description.trim(),
        applyUrl: applyUrl.trim(),
        postedDate: postedDate ? new Date(postedDate) : new Date(),
        isActive: !!isActive,
      },
      { new: true }
    );

    if (!job) return res.status(404).json({ message: "Role not found." });
    return res.json({ job });
  } catch (err) {
    console.error("updateJob error:", err);
    return res.status(500).json({ message: "Failed to update role." });
  }
}

async function deleteJob(req, res) {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);
    if (!job) return res.status(404).json({ message: "Role not found." });
    // Applications are kept for record-keeping even if the role is deleted
    // later; they're denormalized with jobRole/jobTeam so they stay meaningful.
    return res.json({ message: "Deleted." });
  } catch (err) {
    console.error("deleteJob error:", err);
    return res.status(500).json({ message: "Failed to delete role." });
  }
}

// Public: submit a job application (multipart/form-data, resume required).
async function applyToJob(req, res) {
  try {
    const { jobId } = req.params;
    const job = await Job.findById(jobId);
    if (!job || !job.isActive) {
      return res.status(404).json({ message: "This role is no longer open." });
    }

    const { firstName, lastName, name: fullNameField, email, phone = "", location = "", coverNote = "", linkedinUrl = "" } = req.body;
    // Accept either a combined "name" field or separate firstName/lastName
    // (the current apply form sends firstName + lastName).
    const name = (fullNameField && fullNameField.trim()) || [firstName, lastName].filter(Boolean).join(" ").trim();

    if (!name || !email || !email.trim()) {
      return res.status(400).json({ message: "Name and email are required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Please attach your resume." });
    }

    const application = await Application.create({
      job: job._id,
      jobRole: job.role,
      jobTeam: job.team,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      location: location.trim(),
      coverNote: coverNote.trim(),
      linkedinUrl: linkedinUrl.trim(),
      resumeFilename: req.file.originalname,
      resumeMimeType: req.file.mimetype,
      resumeData: req.file.buffer,
      ip: req.ip,
      userAgent: req.headers["user-agent"] || "",
    });

    sendApplicationConfirmation({ to: application.email, name: application.name, role: job.role }).catch(() => {});
    sendApplicationNotification({
      name: application.name,
      email: application.email,
      phone: application.phone,
      location: application.location,
      linkedinUrl: application.linkedinUrl,
      coverNote: application.coverNote,
      jobRole: job.role,
      jobTeam: job.team,
      resumeBuffer: req.file.buffer,
      resumeFilename: req.file.originalname,
      resumeMimeType: req.file.mimetype,
    }).catch(() => {});

    return res.status(201).json({
      message: "Application received. We'll be in touch shortly.",
      id: application._id,
    });
  } catch (err) {
    console.error("applyToJob error:", err);
    if (err.message && err.message.includes("File too large")) {
      return res.status(400).json({ message: "Resume file is too large (max 5MB)." });
    }
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
}

// Admin: list applications for a given job.
async function getJobApplications(req, res) {
  try {
    const { jobId } = req.params;
    const applications = await Application.find({ job: jobId })
      .sort({ createdAt: -1 })
      .select("-resumeData") // never send the binary blob in a list view
      .lean();
    return res.json({ applications });
  } catch (err) {
    console.error("getJobApplications error:", err);
    return res.status(500).json({ message: "Failed to load applications." });
  }
}

// Admin: update an application's review status.
async function updateApplicationStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const allowed = ["new", "reviewed", "shortlisted", "rejected", "hired"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }
    const application = await Application.findByIdAndUpdate(id, { status }, { new: true }).select("-resumeData");
    if (!application) return res.status(404).json({ message: "Application not found." });
    return res.json({ application });
  } catch (err) {
    console.error("updateApplicationStatus error:", err);
    return res.status(500).json({ message: "Failed to update status." });
  }
}

// Admin: download a specific applicant's resume.
async function downloadResume(req, res) {
  try {
    const { id } = req.params;
    const application = await Application.findById(id);
    if (!application || !application.resumeData) {
      return res.status(404).json({ message: "Resume not found." });
    }
    res.setHeader("Content-Type", application.resumeMimeType || "application/octet-stream");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${(application.resumeFilename || "resume").replace(/"/g, "")}"`
    );
    return res.send(application.resumeData);
  } catch (err) {
    console.error("downloadResume error:", err);
    return res.status(500).json({ message: "Failed to download resume." });
  }
}

module.exports = {
  getPublicJobs,
  listJobsAdmin,
  createJob,
  updateJob,
  deleteJob,
  applyToJob,
  getJobApplications,
  updateApplicationStatus,
  downloadResume,
};
