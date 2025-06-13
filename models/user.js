const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/, 'Email is not valid']
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    }
})

module.exports = mongoose.model('User', userSchema) 