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

module.exports = router;
