// Resets Job to just the current open role(s) defined below.
// This is destructive by design: it deletes every existing job document
// and replaces them with the list here, so the database always matches
// what's actually open. Past applications are untouched (they're a
// separate collection, denormalized with the role/team at time of
// application, so they stay meaningful even after a job is removed).
//
// Run again any time you want to reset roles back to this list. If you've
// already added/edited roles in the admin panel and want to keep them,
// don't run this script again — manage roles from the admin panel's
// Careers tab instead.
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Job = require("../models/Job");

const seedJobs = [
  {
    team: "Program Management",
    role: "Project Manager",
    location: "United States (Remote)",
    type: "Contracted",
    description: `## About Stralynn
Stralynn is an industry-leading IT and Business Process consulting organization built on the belief that extraordinary business results are driven by exceptional people. As a Woman- and Minority-Owned Business, we are deeply committed to a "Human-First" culture. We offer our team members unmatched career acceleration, direct mentorship from industry leaders, and the opportunity to drive execution excellence for global brands and government agencies.

## About the Role
This role operates across all service tracks to ensure overall contract management, quality assurance, and security compliance. Serving as the Single Point of Contact (SPOC) for the client, this role is responsible for contract-wide governance and delivering defined outcomes in alignment with the agency's operational needs and long-term technology strategy.

## Responsibilities
- Act as the primary liaison to Portfolio Leads and serve as the dedicated Single Point of Contact (SPOC).
- Provide contract-wide governance across all service tracks.
- Oversee fixed-price deliverable contract management.
- Manage SLA tracking, risk management, and monthly deliverable package compilation.
- Monitor contract budgets and manage Discretionary Task Order proposals.
- Apply and manage both Agile and Waterfall governance frameworks.
- Execute stakeholder management and oversee escalation protocols.

## Required Skills & Experience
- 10+ years of experience in public sector IT project and program management.
- Proven ability to manage deliverable-based, task-order contracts effectively.
- Strong expertise in balancing resources, managing budgets, and driving technical deliverables to acceptance.

## Who We Are Looking For
We are constantly searching for curious, driven, and collaborative individuals to join our growing team. You will thrive here if you are:
- A strategic thinker who can connect the dots between business needs and technological solutions.
- An empathetic communicator who values diverse perspectives and team success over individual ego.
- A lifelong learner eager to step out of their comfort zone and master new functional areas.
- An owner who takes pride in delivering excellence to our clients and our internal teams.`,
  },
];

async function run() {
  await connectDB();

  const { deletedCount } = await Job.deleteMany({});
  console.log(`Removed ${deletedCount} existing role(s).`);

  for (const j of seedJobs) {
    await Job.create(j);
    console.log(`Seeded: ${j.role}`);
  }

  await mongoose.disconnect();
  console.log("Done.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
