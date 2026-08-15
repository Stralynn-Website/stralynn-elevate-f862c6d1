const mongoose = require("mongoose");

// Every editable page + the section(s) on it that hold insight/case-study cards.
const PAGE_KEYS = [
  "home",
  "healthcare",
  "financial-services",
  "private-equity",
  "public-sector",
  "technology",
];
const SECTION_KEYS = ["insights", "caseStudies"];

const ItemSchema = new mongoose.Schema(
  {
    icon: { type: String, default: "" },        // optional lucide icon name, e.g. "FileText"
    tag: { type: String, default: "" },          // optional small label, e.g. "Case Study"
    title: { type: String, required: true, trim: true, maxlength: 200 },
    description: { type: String, required: true, trim: true, maxlength: 1000 },
    order: { type: Number, default: 0 },
  },
  { timestamps: false }
);

const pageContentSchema = new mongoose.Schema(
  {
    pageKey: { type: String, required: true, enum: PAGE_KEYS },
    sectionKey: { type: String, required: true, enum: SECTION_KEYS },
    items: [ItemSchema],
  },
  { timestamps: true }
);

pageContentSchema.index({ pageKey: 1, sectionKey: 1 }, { unique: true });

module.exports = mongoose.model("PageContent", pageContentSchema);
module.exports.PAGE_KEYS = PAGE_KEYS;
module.exports.SECTION_KEYS = SECTION_KEYS;
