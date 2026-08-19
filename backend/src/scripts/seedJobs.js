// Populates Job with the same roles currently hardcoded in the frontend,
// so the admin panel and live site aren't empty on day one.
// Safe to re-run — it only inserts roles that don't already exist (matched
// by role + team), it won't duplicate on repeat runs.
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Job = require("../models/Job");

const seedJobs = [
  { team: "AI", role: "Principal AI Engineer", location: "Remote · Americas", type: "Full-time" },
  { team: "AI", role: "Applied Scientist, Generative Systems", location: "New York", type: "Full-time" },
  { team: "Strategy", role: "Engagement Manager, Private Equity", location: "London", type: "Full-time" },
  { team: "Strategy", role: "Associate, Healthcare Practice", location: "Boston", type: "Full-time" },
  { team: "Design", role: "Principal Product Designer", location: "Remote · EU", type: "Full-time" },
  { team: "Operations", role: "Chief of Staff", location: "Bangalore", type: "Full-time" },
];

async function run() {
  await connectDB();

  for (const j of seedJobs) {
    const existing = await Job.findOne({ role: j.role, team: j.team });
    if (existing) {
      console.log(`Skipped (already exists): ${j.role}`);
      continue;
    }
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
