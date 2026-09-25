const mongoose = require("mongoose");

const speakingInquirySchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true, trim: true, maxlength: 200 },
    eventDate: { type: String, trim: true, maxlength: 50, default: "" },
    eventFormat: { type: String, trim: true, maxlength: 50, default: "" },
    eventLocation: { type: String, trim: true, maxlength: 200, default: "" },
    organization: { type: String, required: true, trim: true, maxlength: 200 },
    audienceSize: { type: String, trim: true, maxlength: 50, default: "" },
    budgetRange: { type: String, trim: true, maxlength: 50, default: "" },
    firstName: { type: String, required: true, trim: true, maxlength: 100 },
    lastName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    countryCode: { type: String, trim: true, maxlength: 10, default: "" },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    message: { type: String, trim: true, maxlength: 2000, default: "" },
    status: {
      type: String,
      enum: ["new", "in_progress", "scheduled", "resolved"],
      default: "new",
    },
    ip: { type: String, default: "" },
    userAgent: { type: String, default: "" },
  },
  { timestamps: true }
);

speakingInquirySchema.index({ createdAt: -1 });
speakingInquirySchema.index({ email: 1 });

module.exports = mongoose.model("SpeakingInquiry", speakingInquirySchema);
