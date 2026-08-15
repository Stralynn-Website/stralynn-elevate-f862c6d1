// Populates PageContent with the same copy that's currently hardcoded in the
// frontend, so the admin panel and the live site aren't empty on day one.
// Safe to re-run: it upserts, it won't duplicate.
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const PageContent = require("../models/PageContent");

const seedData = [
  {
    pageKey: "home",
    sectionKey: "insights",
    items: [
      { icon: "FileText", tag: "Case Study", title: "UVP Portal Modernization", description: "Operational record tracking 100% record fidelity and zero reportable data incidents during a complete government portal overhaul." },
      { icon: "Database", tag: "Technical Brief", title: "42 TB Infrastructure Migration", description: "Technical timeline data, scale metrics, and validation methodologies used to move core enterprise assets in 90 days." },
      { icon: "GaugeCircle", tag: "Diligence Insight", title: "Technical Due Diligence", description: "Risk evaluation parameters used to identify post-close transition risks and secure operational continuity for PE-backed acquisitions." },
      { icon: "Server", tag: "Cutover Playbook", title: "800 GB Cloud Database Cutover", description: "Structural cloud deployment completed with documented sub-10% error rates and validated rollback checkpoints." },
    ],
  },
  {
    pageKey: "healthcare",
    sectionKey: "caseStudies",
    items: [
      { title: "Global Health Technology Digital Transformation Brief", description: "Read how Stralynn's leadership spearheaded the digital modernization of a global health leader, harnessing cloud, AI, and machine learning to advance care outcomes at sustainable cost." },
      { title: "42 TB Health Infrastructure Migration Brief", description: "Discover the exact technical validation methodologies and timeline parameters used to migrate 42 TB of core data assets in 90 days." },
      { title: "EHR Interoperability & Data Integrity Case Study", description: "Examine how our technical teams executed a multi-system database cutover with zero downtime and absolute data accuracy." },
    ],
  },
  {
    pageKey: "financial-services",
    sectionKey: "caseStudies",
    items: [
      { title: "800 GB Multi-Cloud Database Cutover Brief", description: "Read how Stralynn executed a high-velocity cloud database cutover with total schema integrity and zero operational downtime." },
      { title: "42 TB Financial Infrastructure Migration Case Study", description: "Discover the technical validation methodologies and timeline parameters used to migrate 42 TB of core enterprise assets in 90 days." },
    ],
  },
  {
    pageKey: "private-equity",
    sectionKey: "caseStudies",
    items: [
      { title: "Multi-Portco ERP Cutover Brief", description: "Review how Stralynn executed a parallel-track ERP cutover for a private equity-backed buy-and-build platform, completing full go-live within 90 days post-close." },
      { title: "Carve-Out Infrastructure Isolation Brief", description: "Discover how our engineering team separated legacy IT infrastructure and migrated 42 TB of mission-critical data for an enterprise carve-out with zero operational downtime." },
    ],
  },
  {
    pageKey: "public-sector",
    sectionKey: "caseStudies",
    items: [
      { title: "42 TB Government Infrastructure Migration Brief", description: "Review the compliance controls, technical validation methodologies, and scale metrics used to move legacy public records safely." },
      { title: "StraBoard & StraL2C Product Datasheets", description: "Access procurement-friendly documentation covering role-based access, audit logging, and integration compatibility for agency purchase orders." },
    ],
  },
  {
    pageKey: "technology",
    sectionKey: "caseStudies",
    items: [
      { title: "42 TB Infrastructure Migration Brief", description: "Discover the technical validation methodologies and scale metrics used to execute a 42 TB multi-cloud infrastructure migration in 90 days." },
      { title: "Enterprise Platform Consolidation Brief", description: "Read how Stralynn unified fragmented Salesforce, ERP, and Certinia architectures into a single operational system." },
    ],
  },
];

async function run() {
  await connectDB();

  for (const entry of seedData) {
    const items = entry.items.map((it, idx) => ({ ...it, tag: it.tag || "", icon: it.icon || "", order: idx }));
    await PageContent.findOneAndUpdate(
      { pageKey: entry.pageKey, sectionKey: entry.sectionKey },
      { $set: { items } },
      { upsert: true, new: true }
    );
    console.log(`Seeded ${entry.pageKey} / ${entry.sectionKey} (${items.length} items)`);
  }

  await mongoose.disconnect();
  console.log("Done.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
