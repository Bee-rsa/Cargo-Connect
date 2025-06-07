const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/auth"); // fix the path if needed

const {
  createCompanyProfile,
  updateCompanyProfile,
  fetchCompanyProfile,
} = require("../Controllers/profileController");

// Use middleware correctly
router.post("/", protectRoute, createCompanyProfile);
router.put("/", protectRoute, updateCompanyProfile);
router.get("/", protectRoute, fetchCompanyProfile);

module.exports = router;
