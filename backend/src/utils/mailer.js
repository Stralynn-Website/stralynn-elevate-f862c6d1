const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("Email is not configured (SMTP_HOST/SMTP_USER/SMTP_PASS missing) — skipping outgoing emails.");
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === "true", // true for port 465, false for other ports (STARTTLS)
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

// Sends mail and never throws — a failed email should never fail the
// request it's attached to (form submission, job application, etc).
// Returns true/false so the caller can log if it wants to.
async function sendMail({ to, subject, text, html }) {
  const t = getTransporter();
  if (!t) return false;

  try {
    await t.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
      html,
    });
    return true;
  } catch (err) {
    console.error("sendMail error:", err.message);
    return false;
  }
}

async function sendContactConfirmation({ to, firstName }) {
  const name = firstName || "there";
  return sendMail({
    to,
    subject: "We've received your message — Stralynn",
    text: `Hi ${name},\n\nThank you for reaching out to Stralynn. Your response has been received, and a member of our team will reply back shortly.\n\nBest regards,\nStralynn Consulting Services`,
    html: `
      <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 480px; margin: 0 auto; color: #14161a;">
        <h2 style="color: #0b1f3a;">Thanks for reaching out, ${name}.</h2>
        <p>Your response has been received, and a member of our team will reply back shortly.</p>
        <p style="margin-top: 24px;">Best regards,<br/>Stralynn Consulting Services</p>
      </div>
    `,
  });
}

async function sendApplicationConfirmation({ to, name, role }) {
  return sendMail({
    to,
    subject: `Your application for ${role} — Stralynn`,
    text: `Hi ${name},\n\nThank you for applying to the ${role} role at Stralynn. Your application has been received, and our team will review it and reply back shortly.\n\nBest regards,\nStralynn Consulting Services`,
    html: `
      <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 480px; margin: 0 auto; color: #14161a;">
        <h2 style="color: #0b1f3a;">Thanks for applying, ${name}.</h2>
        <p>Your application for <strong>${role}</strong> has been received. Our team will review it and reply back shortly.</p>
        <p style="margin-top: 24px;">Best regards,<br/>Stralynn Consulting Services</p>
      </div>
    `,
  });
}

module.exports = { sendMail, sendContactConfirmation, sendApplicationConfirmation };
