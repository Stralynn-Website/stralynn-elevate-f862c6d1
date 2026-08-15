const PageContent = require("../models/PageContent");

// A registry so the admin sidebar knows which page/section combos exist,
// with human-friendly labels. Add a new page here later and it shows up
// in the admin panel automatically.
const PAGE_REGISTRY = [
  { pageKey: "home", label: "Home Page", sectionKey: "insights", sectionLabel: "Insights" },
  { pageKey: "healthcare", label: "Healthcare", sectionKey: "caseStudies", sectionLabel: "Case Studies" },
  { pageKey: "financial-services", label: "Financial Services", sectionKey: "caseStudies", sectionLabel: "Case Studies" },
  { pageKey: "private-equity", label: "Private Equity", sectionKey: "caseStudies", sectionLabel: "Case Studies" },
  { pageKey: "public-sector", label: "Public Sector", sectionKey: "caseStudies", sectionLabel: "Case Studies" },
  { pageKey: "technology", label: "Technology", sectionKey: "caseStudies", sectionLabel: "Case Studies" },
];

function findRegistryEntry(pageKey) {
  return PAGE_REGISTRY.find((p) => p.pageKey === pageKey);
}

// Public: used by the live site to render dynamic content. No auth,
// read-only, safe to be public.
async function getPublicContent(req, res) {
  try {
    const { pageKey } = req.params;
    const entry = findRegistryEntry(pageKey);
    if (!entry) return res.status(404).json({ message: "Unknown page." });

    const doc = await PageContent.findOne({ pageKey, sectionKey: entry.sectionKey }).lean();
    const items = doc ? doc.items.sort((a, b) => (a.order || 0) - (b.order || 0)) : [];
    return res.json({ pageKey, sectionKey: entry.sectionKey, items });
  } catch (err) {
    console.error("getPublicContent error:", err);
    return res.status(500).json({ message: "Failed to load content." });
  }
}

// Admin: list all editable pages/sections for the sidebar.
async function listPages(req, res) {
  return res.json({ pages: PAGE_REGISTRY });
}

// Admin: get current items for a page (creates an empty doc conceptually,
// doesn't persist until saved).
async function getAdminContent(req, res) {
  try {
    const { pageKey } = req.params;
    const entry = findRegistryEntry(pageKey);
    if (!entry) return res.status(404).json({ message: "Unknown page." });

    const doc = await PageContent.findOne({ pageKey, sectionKey: entry.sectionKey }).lean();
    const items = doc ? doc.items.sort((a, b) => (a.order || 0) - (b.order || 0)) : [];
    return res.json({ pageKey, sectionKey: entry.sectionKey, sectionLabel: entry.sectionLabel, label: entry.label, items });
  } catch (err) {
    console.error("getAdminContent error:", err);
    return res.status(500).json({ message: "Failed to load content." });
  }
}

// Admin: replace the full items array for a page/section in one save.
async function updateAdminContent(req, res) {
  try {
    const { pageKey } = req.params;
    const entry = findRegistryEntry(pageKey);
    if (!entry) return res.status(404).json({ message: "Unknown page." });

    const { items } = req.body;
    if (!Array.isArray(items)) {
      return res.status(400).json({ message: "items must be an array." });
    }

    for (const item of items) {
      if (!item.title || !item.title.trim() || !item.description || !item.description.trim()) {
        return res.status(400).json({ message: "Every item needs a title and description." });
      }
    }

    const cleanItems = items.map((it, idx) => ({
      icon: (it.icon || "").trim(),
      tag: (it.tag || "").trim(),
      title: it.title.trim(),
      description: it.description.trim(),
      order: idx,
    }));

    const doc = await PageContent.findOneAndUpdate(
      { pageKey, sectionKey: entry.sectionKey },
      { $set: { items: cleanItems } },
      { new: true, upsert: true }
    );

    return res.json({ pageKey, sectionKey: entry.sectionKey, items: doc.items });
  } catch (err) {
    console.error("updateAdminContent error:", err);
    return res.status(500).json({ message: "Failed to save content." });
  }
}

module.exports = {
  PAGE_REGISTRY,
  getPublicContent,
  listPages,
  getAdminContent,
  updateAdminContent,
};
