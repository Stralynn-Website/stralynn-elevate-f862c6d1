const mongoose = require("mongoose");

const REASONS = [
  "General inquiry",
  "New business opportunity",
  "Media / Press",
  "Careers",
  "Partnerships",
  "Other",
];

const contactSchema = new mongoose.Schema(
  {
    reason: { type: String, enum: [...REASONS, ""], default: "" },
    firstName: { type: String, required: true, trim: true, maxlength: 100 },
    lastName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    countryCode: { type: String, trim: true, maxlength: 10, default: "" },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    company: { type: String, required: true, trim: true, maxlength: 200 },
    role: { type: String, trim: true, maxlength: 150, default: "" },
    message: { type: String, required: true, trim: true, maxlength: 1500 },
    privacyAccepted: { type: Boolean, required: true, default: false },
    status: {
      type: String,
      enum: ["new", "in_progress", "resolved"],
      default: "new",
    },
    ip: { type: String, default: "" },
    userAgent: { type: String, default: "" },
  },
  { timestamps: true }
);

contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });

module.exports = mongoose.model("Contact", contactSchema);
