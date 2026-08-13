const Contact = require("../models/Contact");

async function submitContact(req, res) {
  try {
    const {
      reason = "",
      firstName,
      lastName,
      email,
      countryCode = "",
      phone = "",
      company,
      message,
      privacyAccepted,
    } = req.body;

    if (!firstName || !lastName || !email || !company || !message) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    if (!privacyAccepted) {
      return res.status(400).json({ message: "You must accept the Privacy Notice." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }

    const doc = await Contact.create({
      reason,
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      company,
      message,
      privacyAccepted: !!privacyAccepted,
      ip: req.ip,
      userAgent: req.headers["user-agent"] || "",
    });

    return res.status(201).json({
      message: "Message received. A partner will be in touch within one business day.",
      id: doc._id,
    });
  } catch (err) {
    console.error("submitContact error:", err);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
}

module.exports = { submitContact };
