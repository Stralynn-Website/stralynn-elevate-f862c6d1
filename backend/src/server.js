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

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "50kb" }));

const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // allow no-origin requests (curl, server-to-server) and same-origin admin panel
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// --- API routes ---
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/jobs", jobsRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// --- Admin panel (static files) ---
app.use("/admin", express.static(path.join(__dirname, "..", "admin-panel")));
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "admin-panel", "index.html"));
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found." });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "Origin not allowed." });
  }
  res.status(500).json({ message: "Internal server error." });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Stralynn backend running on port ${PORT}`);
  });
});
