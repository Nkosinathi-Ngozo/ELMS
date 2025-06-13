const router = require('express').Router();
const authController = require('../controllers/auth')
const { verifyToken } = require('../middleware/auth')
const { bruteForce } = require('../middleware/bruteForceProtectionMiddleware')
const { loginAttemptLogger } = require('../middleware/loginAttemptMiddleware')


//! REGISTER
router.post("/register", authController.register);

//! LOGIN
router.post('/login', bruteForce.prevent, loginAttemptLogger, authController.login);

module.exports = router;