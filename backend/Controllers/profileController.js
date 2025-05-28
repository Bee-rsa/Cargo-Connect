const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloudinary");
const Company = require("../models/Profile");

// Helper function to sign JWT
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Create Company Profile
const createCompanyProfile = async (req, res) => {
  try {
    const {
      companyName,
      numberOfEmployees,
      country,
      city,
      companyOverview,
      typeOfCompany,
      image,
    } = req.body;

    if (!companyName || !numberOfEmployees || !country || !city) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    let profileImage = null;
    if (image && image.startsWith("data:image")) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      profileImage = uploadResponse.secure_url;
    }

    const company = await Company.create({
      user: req.user._id,
      companyName,
      numberOfEmployees,
      country,
      city,
      companyOverview,
      typeOfCompany,
      image: profileImage,
    });

    res.status(201).json({
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error creating company profile:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Update Company Profile
const updateCompanyProfile = async (req, res) => {
  try {
    const {
      companyName,
      numberOfEmployees,
      country,
      city,
      companyOverview,
      typeOfCompany,
      image,
    } = req.body;

    if (!companyName || !numberOfEmployees || !country || !city) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    let company = await Company.findOne({ user: req.user._id });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    let profileImage = company.image;
    if (image && image.startsWith("data:image")) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      profileImage = uploadResponse.secure_url;
    }

    company = await Company.findByIdAndUpdate(
      company._id,
      {
        companyName,
        numberOfEmployees,
        country,
        city,
        companyOverview,
        typeOfCompany,
        image: profileImage,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error updating company profile:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Fetch Company Profile
const fetchCompanyProfile = async (req, res) => {
  try {
    const company = await Company.findOne({ user: req.user._id });
    if (!company) {
      return res.status(404).json({ success: false, message: "Company profile not found" });
    }
    res.status(200).json({ success: true, company });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  createCompanyProfile,
  updateCompanyProfile,
  fetchCompanyProfile,
};
