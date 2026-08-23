const Contact = require("../models/Contact");
const { sendContactConfirmation, sendContactNotification } = require("../utils/mailer");

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
      role = "",
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
      role,
      message,
      privacyAccepted: !!privacyAccepted,
      ip: req.ip,
      userAgent: req.headers["user-agent"] || "",
    });

    // Fire-and-forget: don't let a slow/failed email delay the response
    // that confirms the submission was saved.
    sendContactConfirmation({ to: email, firstName }).catch(() => {});
    sendContactNotification({ firstName, lastName, email, phone: countryCode ? `${countryCode} ${phone}` : phone, company, role, reason, message }).catch(() => {});

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
