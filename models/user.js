const mongoose = require('mongoose');

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
    match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/, 'Email is not valid'],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'], // update this list as needed
    default: 'user',
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  }
});

module.exports = mongoose.model('User', userSchema);
