const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  leaseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lease',
    required: true
  },
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
    enum: ['bank_transfer', 'cash', 'credit card', 'mobile money'], 
    default: 'bank_transfer',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'], 
    default: 'pending',
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Payment', PaymentSchema);
