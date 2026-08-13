const express = require("express");
const rateLimit = require("express-rate-limit");
const { submitContact } = require("../controllers/contact.controller");

const router = express.Router();

// Limit abuse: 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many submissions from this device. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/", contactLimiter, submitContact);

module.exports = router;
