require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact.routes");
const adminRoutes = require("./routes/admin.routes");
const contentRoutes = require("./routes/content.routes");
const jobsRoutes = require("./routes/jobs.routes");

const app = express();

app.set("trust proxy", 1);

// --------------------------------------------------
// MIDDLEWARE
// --------------------------------------------------

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  express.json({
    limit: "5mb",
  })
);

// --------------------------------------------------
// CORS
// --------------------------------------------------

const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

// Deployed frontend
const defaultFrontendOrigin =
  "https://stralynn-elevate-f862c6d1.vercel.app";

if (!allowedOrigins.includes(defaultFrontendOrigin)) {
  allowedOrigins.push(defaultFrontendOrigin);
}

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without Origin header
      // (curl, Postman, server-to-server, etc.)
      if (
        !origin ||
        allowedOrigins.length === 0 ||
        allowedOrigins.includes(origin)
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true,
  })
);

// --------------------------------------------------
// API ROUTES
// --------------------------------------------------

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/jobs", jobsRoutes);

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
  });
});

// --------------------------------------------------
// ADMIN PANEL
// --------------------------------------------------

app.use(
  "/admin",
  express.static(
    path.join(__dirname, "..", "admin-panel")
  )
);

app.get("/admin/*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "admin-panel",
      "index.html"
    )
  );
});

// --------------------------------------------------
// 404 HANDLER
// --------------------------------------------------

app.use((req, res) => {
  res.status(404).json({
    message: "Not found.",
  });
});

// --------------------------------------------------
// ERROR HANDLER
// --------------------------------------------------

app.use((err, req, res, next) => {
  console.error(err);

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      message: "Origin not allowed.",
    });
  }

  res.status(500).json({
    message: "Internal server error.",
  });
});

// --------------------------------------------------
// DATABASE CONNECTION
// --------------------------------------------------

connectDB().catch((err) => {
  console.error("MongoDB connection error:", err);
});

// --------------------------------------------------
// VERCEL SERVERLESS EXPORT
// --------------------------------------------------

module.exports = app;