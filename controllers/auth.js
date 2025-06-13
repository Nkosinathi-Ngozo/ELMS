const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const userService = require('../service/user');
const maxAge = 3 * 24 * 60 * 60;



const authController = {

    async register(req, res){
        console.log('Register');
  
        const {
            username, 
            email, 
            password
        } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = {
                username: username,
                email: email,
                password: hashedPassword,
            }
            const savedUser = await userService.createUser(newUser);
            
            const user = savedUser._doc

            const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SEC,
                {expiresIn:"3d"}
            );

            console.log(`_id: ${user._id}\nisAdmin: ${user.isAdmin}`)

            //authorization cookie
            res.cookie('jwt', 
                accessToken, 
                {
                    httpOnly: true, 
                    maxAge: maxAge * 1000
                }
            );
            
            console.log('User registered successfully');

            res.status(201).json({user, accessToken, success: true});
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({error})
        }
    }, 

    async login(req, res) {
        try {
            const { email, password } = req.body;
    
            const retrievedUser = await userService.getUserByEmail(email);
    
            if (!retrievedUser) {
                return res.status(401).json({ message: "Wrong email" });
            }
    
            const user = retrievedUser._doc; // or just use retrievedUser if _doc is unnecessary
    
            // Check the password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
    
            // Create a JWT token
            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SEC,
                { expiresIn: "1h" }
            );
    
            console.log({ token }, { userId: user._id });
    
            res.status(200).json({
                token,
                userId: user._id,
                role: user.role,
            });
    
        } catch (error) {
            console.error('Error logging in user:', error);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    },
    

    async logout(req, res){
        res.cookie('jwt', '', {
            maxAge: 1
        });
    },

    async protected(req, res){
        res.json({ isAuthenticated: true, user: req.user });
    }
}

module.exports = authController