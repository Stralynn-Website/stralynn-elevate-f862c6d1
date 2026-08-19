const express = require("express");
const { getPublicJobs } = require("../controllers/jobs.controller");

const router = express.Router();

// Public, read-only. GET /api/jobs
router.get("/", getPublicJobs);

module.exports = router;
