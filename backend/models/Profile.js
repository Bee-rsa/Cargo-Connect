const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    numberOfEmployees: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
     name: { type: String, required: true },
  email: { type: String, required: true },
    city: {
      type: String,
      required: true,
    },
    companyOverview: {
      type: String,
      default: "",
    },
    typeOfCompany: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
