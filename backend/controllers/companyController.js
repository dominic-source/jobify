const Company = require('../models/companyModel');

// @desc Add a new company
exports.addCompany = async (req, res) => {
  const { name, location, logo } = req.body;
  try {
    const company = new Company({ name, location, logo });
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc Get all companies
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
