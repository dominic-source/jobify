const express = require('express');
const { addCompany, getCompanies } = require('../controllers/companyController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add', protect, addCompany);
router.get('/', protect, getCompanies);

module.exports = router;
