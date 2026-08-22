const express = require("express");
const rateLimit = require("express-rate-limit");
const { requireAdminAuth } = require("../middleware/auth");
const {
  login,
  listSubmissions,
  updateStatus,
  deleteSubmission,
  exportExcel,
} = require("../controllers/admin.controller");
const {
  listPages,
  getAdminContent,
  updateAdminContent,
} = require("../controllers/content.controller");
const {
  listJobsAdmin,
  createJob,
  updateJob,
  deleteJob,
  getJobApplications,
  updateApplicationStatus,
  downloadResume,
} = require("../controllers/jobs.controller");

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many login attempts. Please try again later." },
});

router.post("/login", loginLimiter, login);
router.get("/submissions", requireAdminAuth, listSubmissions);
router.patch("/submissions/:id/status", requireAdminAuth, updateStatus);
router.delete("/submissions/:id", requireAdminAuth, deleteSubmission);
router.get("/submissions/export/excel", requireAdminAuth, exportExcel);

// --- Page content (insights / case studies) management ---
router.get("/content/pages", requireAdminAuth, listPages);
router.get("/content/:pageKey", requireAdminAuth, getAdminContent);
router.put("/content/:pageKey", requireAdminAuth, updateAdminContent);

// --- Careers / open roles management ---
router.get("/jobs", requireAdminAuth, listJobsAdmin);
router.post("/jobs", requireAdminAuth, createJob);
router.put("/jobs/:id", requireAdminAuth, updateJob);
router.delete("/jobs/:id", requireAdminAuth, deleteJob);

// --- Job applications ---
router.get("/jobs/:jobId/applications", requireAdminAuth, getJobApplications);
router.patch("/applications/:id/status", requireAdminAuth, updateApplicationStatus);
router.get("/applications/:id/resume", requireAdminAuth, downloadResume);

module.exports = router;
