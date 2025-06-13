const LoginAttempt = require('../models/loginAttempt')

const loginAttemptLogger = async (req, res, next) => {
    const originalJson = res.json;
    res.json = function(data) {
        const email = req.body.email;
        const ipAddress = req.id || req.connection.remoteAddress;
        const successfulLogin = !data.message || data.message !== "Invalid credentials";

        LoginAttempt.create({ email, ipAddress, successfulLogin })
        .catch(err => console.error("Error loggin login attempt:", err));

        originalJson.call(this, data); 
    };
    next();
};


module.exports = { loginAttemptLogger }