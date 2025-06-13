const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['bank_transfer', 'cash', 'credit_card', 'mobile_money'], // Add other methods you support
    default: 'bank_transfer',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'], // Adjust based on your app logic
    default: 'pending',
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Payment', PaymentSchema);
