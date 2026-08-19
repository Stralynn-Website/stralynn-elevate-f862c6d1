const Job = require("../models/Job");

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

// Admin: everything, including inactive, for management.
async function listJobsAdmin(req, res) {
  try {
    const jobs = await Job.find({}).sort({ postedDate: -1 }).lean();
    return res.json({ jobs });
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
      applicants = 0, postedDate, isActive = true,
    } = req.body;

    const job = await Job.create({
      team: team.trim(),
      role: role.trim(),
      location: location.trim(),
      type: type.trim(),
      description: description.trim(),
      applyUrl: applyUrl.trim(),
      applicants: Number(applicants) || 0,
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
      applicants = 0, postedDate, isActive = true,
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
        applicants: Number(applicants) || 0,
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
    return res.json({ message: "Deleted." });
  } catch (err) {
    console.error("deleteJob error:", err);
    return res.status(500).json({ message: "Failed to delete role." });
  }
}

module.exports = {
  getPublicJobs,
  listJobsAdmin,
  createJob,
  updateJob,
  deleteJob,
};
