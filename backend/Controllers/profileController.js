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
// Create or Update Company Profile
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
      name, 
      email,
    } = req.body;

    if (!companyName || !numberOfEmployees || !country || !city || !name || !email) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Handle image upload if it's base64
    let profileImage = null;
    if (image && image.startsWith("data:image")) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      profileImage = uploadResponse.secure_url;
    }

    // Check if a company profile already exists for this user
    let existingCompany = await Company.findOne({ user: req.user._id });

    if (existingCompany) {
      // Update the existing profile
      existingCompany.companyName = companyName;
      existingCompany.numberOfEmployees = numberOfEmployees;
      existingCompany.country = country;
      existingCompany.city = city;
      existingCompany.companyOverview = companyOverview;
      existingCompany.typeOfCompany = typeOfCompany;
      if (profileImage) existingCompany.image = profileImage;

      await existingCompany.save();

      return res.status(200).json({
        success: true,
        message: "Company profile updated",
        company: existingCompany,
      });
    }

    // If no profile exists, create a new one
    const newCompany = await Company.create({
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
      message: "Company profile created",
      company: newCompany,
    });
  } catch (error) {
    console.error("Error creating/updating company profile:", error);
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
    console.log("User ID from token:", req.user?._id); 
    
    if (!req.user || !req.user._id) {
      return res.status(401).json({ success: false, message: "Unauthorized: no user ID" });
    }

    const company = await Company.findOne({ user: req.user._id });
    
    if (!company) {
      return res.status(404).json({ success: false, message: "Company profile not found" });
    }

    res.status(200).json(company); // ✅ Just send the company object
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


module.exports = {
  createCompanyProfile,
  updateCompanyProfile,
  fetchCompanyProfile,
};
