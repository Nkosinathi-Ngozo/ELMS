const mongoose = require('mongoose');

const LeaseSchema = new mongoose.Schema({
  tenant: {
    type: String,
    required: true
  },
  property: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Pending', 'Terminated', 'Expired'], // you can adjust these
    required: true
  },
  lastModifiedBy: {
    type: String,
    required: true
  },
  lastModifiedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Lease', LeaseSchema);
