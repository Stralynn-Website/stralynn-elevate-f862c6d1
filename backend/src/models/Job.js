const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    team: { type: String, required: true, trim: true, maxlength: 60 },       // category, e.g. "AI", "Strategy"
    role: { type: String, required: true, trim: true, maxlength: 150 },      // job title
    location: { type: String, required: true, trim: true, maxlength: 100 },
    type: { type: String, required: true, trim: true, default: "Full-time", maxlength: 60 },
    description: { type: String, trim: true, default: "", maxlength: 8000 }, // supports light markdown: "## Heading", "- bullet"
    applyUrl: { type: String, trim: true, default: "" },
    applicants: { type: Number, default: 0, min: 0 },
    postedDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }, // lets admin hide a role without deleting it
  },
  { timestamps: true }
);

jobSchema.index({ postedDate: -1 });

module.exports = mongoose.model("Job", jobSchema);
