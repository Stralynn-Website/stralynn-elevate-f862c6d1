const express = require("express");
const { getPublicContent } = require("../controllers/content.controller");

const router = express.Router();

// Public, read-only. GET /api/content/:pageKey
router.get("/:pageKey", getPublicContent);

module.exports = router;
