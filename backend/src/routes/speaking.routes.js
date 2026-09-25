const express = require("express");
const rateLimit = require("express-rate-limit");
const { submitSpeakingInquiry } = require("../controllers/speaking.controller");

const router = express.Router();

// Limit abuse: 5 submissions per 15 minutes per IP
const speakingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many submissions from this device. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/", speakingLimiter, submitSpeakingInquiry);

module.exports = router;
