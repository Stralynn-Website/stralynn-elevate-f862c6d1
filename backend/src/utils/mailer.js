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
async function sendMail({ to, subject, text, html, attachments }) {
  const t = getTransporter();
  if (!t) return false;

  try {
    await t.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
      html,
      attachments,
    });
    return true;
  } catch (err) {
    console.error("sendMail error:", err.message);
    return false;
  }
}

// The internal address that should be notified whenever someone submits the
// contact form or applies to a role. Defaults to connect@stralynn.com but
// can be overridden via env if that inbox ever changes.
function getCompanyNotifyEmail() {
  return process.env.COMPANY_NOTIFY_EMAIL || "connect@stralynn.com";
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

// Internal notification sent to the company whenever the contact form is submitted.
async function sendContactNotification({ firstName, lastName, email, phone, company, role, reason, message }) {
  const fullName = [firstName, lastName].filter(Boolean).join(" ") || "(no name provided)";
  const rows = [
    ["Name", fullName],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Role", role || "—"],
    ["Reason", reason || "—"],
  ];
  const rowsHtml = rows
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;">${label}</td><td style="padding:4px 0;">${value}</td></tr>`)
    .join("");
  const rowsText = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  return sendMail({
    to: getCompanyNotifyEmail(),
    subject: `New contact form submission — ${fullName}`,
    text: `A new contact form submission was received.\n\n${rowsText}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #14161a;">
        <h2 style="color: #0b1f3a;">New contact form submission</h2>
        <table style="border-collapse: collapse; margin: 16px 0;">${rowsHtml}</table>
        <div style="margin-top: 8px; padding: 14px; background: #f9fafb; border-radius: 8px; white-space: pre-wrap;">${message}</div>
        <p style="margin-top: 20px; color: #6b7280; font-size: 13px;">View and manage this submission in the admin panel.</p>
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

// Internal notification sent to the company whenever someone applies to a role.
// Includes the resume as an attachment so it can be reviewed directly from the inbox.
async function sendApplicationNotification({ name, email, phone, location, linkedinUrl, coverNote, jobRole, jobTeam, resumeBuffer, resumeFilename, resumeMimeType }) {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Location", location || "—"],
    ["LinkedIn / Portfolio", linkedinUrl || "—"],
    ["Role applied for", `${jobRole} (${jobTeam})`],
  ];
  const rowsHtml = rows
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;">${label}</td><td style="padding:4px 0;">${value}</td></tr>`)
    .join("");
  const rowsText = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  return sendMail({
    to: getCompanyNotifyEmail(),
    subject: `New job application — ${jobRole} — ${name}`,
    text: `A new job application was received.\n\n${rowsText}\n\nNote:\n${coverNote || "(none)"}`,
    html: `
      <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #14161a;">
        <h2 style="color: #0b1f3a;">New job application</h2>
        <table style="border-collapse: collapse; margin: 16px 0;">${rowsHtml}</table>
        ${coverNote ? `<div style="margin-top: 8px; padding: 14px; background: #f9fafb; border-radius: 8px; white-space: pre-wrap;">${coverNote}</div>` : ""}
        <p style="margin-top: 20px; color: #6b7280; font-size: 13px;">Resume attached. View and manage this application in the admin panel.</p>
      </div>
    `,
    attachments: resumeBuffer
      ? [{ filename: resumeFilename || "resume", content: resumeBuffer, contentType: resumeMimeType || "application/octet-stream" }]
      : undefined,
  });
}

module.exports = {
  sendMail,
  sendContactConfirmation,
  sendContactNotification,
  sendApplicationConfirmation,
  sendApplicationNotification,
};
