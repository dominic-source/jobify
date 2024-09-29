const express = require('express');
const { addJob, getJobs } = require('../controllers/jobController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add', protect, addJob);
router.get('/', protect, getJobs);

module.exports = router;
