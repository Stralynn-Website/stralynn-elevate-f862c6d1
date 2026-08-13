require("dotenv").config();
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");
const Admin = require("../models/Admin");
const mongoose = require("mongoose");

async function run() {
  const email = (process.env.ADMIN_EMAIL || "").toLowerCase().trim();
  const password = process.env.ADMIN_PASSWORD || "";

  if (!email || !password) {
    console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD in your .env before running this script.");
    process.exit(1);
  }
  if (password.length < 8) {
    console.error("ADMIN_PASSWORD should be at least 8 characters.");
    process.exit(1);
  }

  await connectDB();

  const existing = await Admin.findOne({ email });
  const passwordHash = await bcrypt.hash(password, 10);

  if (existing) {
    existing.passwordHash = passwordHash;
    await existing.save();
    console.log(`Admin password updated for ${email}`);
  } else {
    await Admin.create({ email, passwordHash, name: "Admin" });
    console.log(`Admin created: ${email}`);
  }

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
