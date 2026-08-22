const express = require("express");
const multer = require("multer");
const rateLimit = require("express-rate-limit");
const { getPublicJobs, applyToJob } = require("../controllers/jobs.controller");

const router = express.Router();

// Resumes stay in memory only long enough to write into MongoDB — no files
// touch disk, which keeps this safe on hosts with ephemeral filesystems.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowed.includes(file.mimetype)) return cb(null, true);
    cb(new Error("Please upload a PDF or Word document."));
  },
});

const applyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  message: { message: "Too many applications submitted from this device. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public, read-only. GET /api/jobs
router.get("/", getPublicJobs);

// Public. POST /api/jobs/:jobId/apply (multipart/form-data)
router.post("/:jobId/apply", applyLimiter, (req, res, next) => {
  upload.single("resume")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message || "Failed to process the uploaded file." });
    }
    next();
  });
}, applyToJob);

module.exports = router;
