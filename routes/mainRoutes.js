const router = require('express').Router();
const mainController = require('../controllers/main')
const { verifyToken } = require('../middleware/auth')

//! GET report data
router.get("/reports", verifyToken, mainController.getReports);

//! GET dashboard data
router.get('/dashboard', verifyToken, mainController.getDashboard);
 
module.exports = router;