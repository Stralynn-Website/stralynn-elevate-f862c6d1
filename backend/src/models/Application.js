const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    // Denormalized so applications stay meaningful even if a role is later edited/deleted.
    jobRole: { type: String, required: true },
    jobTeam: { type: String, required: true },

    name: { type: String, required: true, trim: true, maxlength: 150 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    location: { type: String, trim: true, maxlength: 150, default: "" },
    coverNote: { type: String, trim: true, maxlength: 3000, default: "" },
    linkedinUrl: { type: String, trim: true, maxlength: 300, default: "" },

    resumeFilename: { type: String, default: "" },
    resumeMimeType: { type: String, default: "" },
    resumeData: { type: Buffer, default: null }, // stored in Mongo — fine for resume-sized PDFs/docs

    status: {
      type: String,
      enum: ["new", "reviewed", "shortlisted", "rejected", "hired"],
      default: "new",
    },

    ip: { type: String, default: "" },
    userAgent: { type: String, default: "" },
  },
  { timestamps: true }
);

applicationSchema.index({ job: 1, createdAt: -1 });

module.exports = mongoose.model("Application", applicationSchema);
