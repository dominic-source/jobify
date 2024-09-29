const Job = require('../models/jobModel');

// @desc Add a new job
exports.addJob = async (req, res) => {
  const { title, description, company, location, salary } = req.body;
  try {
    const job = new Job({ title, description, company, location, salary });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc Get all jobs with pagination and filtering
exports.getJobs = async (req, res) => {
  const { page = 1, limit = 10, location } = req.query;
  try {
    const query = location ? { location } : {};
    const jobs = await Job.find(query)
      .populate('company')
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const count = await Job.countDocuments(query);
    res.json({
      jobs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
