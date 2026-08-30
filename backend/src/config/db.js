const mongoose = require("mongoose");

// Reuses an in-flight or already-established connection across invocations
// instead of opening a new one every time. This matters specifically on
// serverless hosts (Vercel): every cold start would otherwise open a fresh
// MongoDB connection that never gets cleanly closed, and Atlas has a hard
// cap on concurrent connections — repeated cold starts can exhaust it and
// cause intermittent "too many connections" errors. Stored on `global` so
// it survives across invocations within the same warm serverless instance.
let cachedPromise = global._mongooseConnPromise;

async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI is not set in environment variables.");
    // Exiting the process is fine for a normal long-running `npm run dev` /
    // `npm start`, but would kill a serverless function instance for every
    // future request too — so only hard-exit when not running on Vercel.
    if (!process.env.VERCEL) process.exit(1);
    throw new Error("MONGO_URI is not set in environment variables.");
  }

  if (cachedPromise) {
    try {
      return await cachedPromise;
    } catch {
      // Previous attempt failed — clear it so this call retries instead of
      // returning the same rejected promise forever.
      cachedPromise = global._mongooseConnPromise = null;
    }
  }

  cachedPromise = global._mongooseConnPromise = mongoose
    .connect(uri)
    .then((conn) => {
      console.log("MongoDB connected:", mongoose.connection.host);
      return conn;
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
      cachedPromise = global._mongooseConnPromise = null;
      if (!process.env.VERCEL) process.exit(1);
      throw err;
    });

  return cachedPromise;
}

module.exports = connectDB;
