const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ExcelJS = require("exceljs");
const Admin = require("../models/Admin");
const Contact = require("../models/Contact");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const match = await bcrypt.compare(password, admin.passwordHash);
    if (!match) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    return res.json({ token, admin: { email: admin.email, name: admin.name } });
  } catch (err) {
    console.error("login error:", err);
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
}

async function listSubmissions(req, res) {
  try {
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 20, 1), 100);
    const search = (req.query.search || "").trim();
    const status = (req.query.status || "").trim();

    const filter = {};
    if (status) filter.status = status;
    if (search) {
      const re = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      filter.$or = [
        { firstName: re },
        { lastName: re },
        { email: re },
        { company: re },
        { role: re },
        { message: re },
      ];
    }

    const [items, total] = await Promise.all([
      Contact.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Contact.countDocuments(filter),
    ]);

    return res.json({
      items,
      total,
      page,
      pages: Math.ceil(total / limit) || 1,
    });
  } catch (err) {
    console.error("listSubmissions error:", err);
    return res.status(500).json({ message: "Failed to fetch submissions." });
  }
}

async function updateStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const allowed = ["new", "in_progress", "resolved"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }
    const doc = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    if (!doc) return res.status(404).json({ message: "Submission not found." });
    return res.json({ item: doc });
  } catch (err) {
    console.error("updateStatus error:", err);
    return res.status(500).json({ message: "Failed to update status." });
  }
}

async function deleteSubmission(req, res) {
  try {
    const { id } = req.params;
    const doc = await Contact.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ message: "Submission not found." });
    return res.json({ message: "Deleted." });
  } catch (err) {
    console.error("deleteSubmission error:", err);
    return res.status(500).json({ message: "Failed to delete submission." });
  }
}

async function exportExcel(req, res) {
  try {
    const items = await Contact.find({}).sort({ createdAt: -1 }).lean();

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Contact Submissions");

    sheet.columns = [
      { header: "Date", key: "date", width: 20 },
      { header: "Reason", key: "reason", width: 22 },
      { header: "First Name", key: "firstName", width: 18 },
      { header: "Last Name", key: "lastName", width: 18 },
      { header: "Email", key: "email", width: 28 },
      { header: "Country Code", key: "countryCode", width: 14 },
      { header: "Phone", key: "phone", width: 18 },
      { header: "Company", key: "company", width: 24 },
      { header: "Role", key: "role", width: 20 },
      { header: "Message", key: "message", width: 60 },
      { header: "Status", key: "status", width: 14 },
    ];
    sheet.getRow(1).font = { bold: true };

    items.forEach((it) => {
      sheet.addRow({
        date: it.createdAt ? new Date(it.createdAt).toLocaleString() : "",
        reason: it.reason || "",
        firstName: it.firstName || "",
        lastName: it.lastName || "",
        email: it.email || "",
        countryCode: it.countryCode || "",
        phone: it.phone || "",
        company: it.company || "",
        role: it.role || "",
        message: it.message || "",
        status: it.status || "",
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="stralynn-contact-submissions-${Date.now()}.xlsx"`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("exportExcel error:", err);
    return res.status(500).json({ message: "Failed to export data." });
  }
}

module.exports = {
  login,
  listSubmissions,
  updateStatus,
  deleteSubmission,
  exportExcel,
};
