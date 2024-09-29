const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  location: { type: String },
  salary: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
