const router = require('express').Router();
const authController = require('../controllers/auth')
const { verifyToken } = require('../middleware/auth')
const { bruteForce } = require('../middleware/bruteForceProtectionMiddleware')
const { loginAttemptLogger } = require('../middleware/loginAttemptMiddleware')


//! REGISTER
router.post("/register", authController.register);

//! LOGIN
router.post('/login', bruteForce.prevent, loginAttemptLogger, authController.login);

//! LOGOUT 
router.get('/logout', authController.logout);

//! LOGOUT 
router.get('/protected', verifyToken, authController.protected);

module.exports = router;