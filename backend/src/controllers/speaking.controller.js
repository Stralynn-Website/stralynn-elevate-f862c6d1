const SpeakingInquiry = require("../models/SpeakingInquiry");
const { sendSpeakingInquiryNotification, sendSpeakingInquiryConfirmation } = require("../utils/mailer");

async function submitSpeakingInquiry(req, res) {
  try {
    const {
      eventName,
      eventDate = "",
      eventFormat = "",
      eventLocation = "",
      organization,
      audienceSize = "",
      budgetRange = "",
      firstName,
      lastName,
      email,
      countryCode = "",
      phone = "",
      message = "",
    } = req.body;

    if (!eventName || !organization || !firstName || !lastName || !email) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }

    const doc = await SpeakingInquiry.create({
      eventName,
      eventDate,
      eventFormat,
      eventLocation,
      organization,
      audienceSize,
      budgetRange,
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      message,
      status: "scheduled",
      ip: req.ip,
      userAgent: req.headers["user-agent"] || "",
    });

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const fullPhone = countryCode ? `${countryCode} ${phone}`.trim() : phone;

    // Fire-and-forget: don't let a slow/failed email delay the response
    // that confirms the submission was saved.
    sendSpeakingInquiryNotification({
      eventName,
      eventDate,
      eventFormat,
      eventLocation,
      organization,
      audienceSize,
      budgetRange,
      fullName,
      email,
      phone: fullPhone,
      message,
    }).catch(() => {});
    sendSpeakingInquiryConfirmation({ to: email, firstName, eventName }).catch(() => {});

    return res.status(201).json({
      message: "Your conversation has been scheduled. Alpna's team will follow up shortly to confirm a time.",
      id: doc._id,
    });
  } catch (err) {
    console.error("submitSpeakingInquiry error:", err);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
}

module.exports = { submitSpeakingInquiry };
