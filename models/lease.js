const mongoose = require('mongoose');

const LeaseSchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true
  },
  mission: {
    type: String,
    required: true
  },
  leasePeriod: {
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  currency: {
    type: String,
    required: true, // e.g., "ZAR", "USD"
    enum: ['ZAR', 'USD'], // update this list as needed
    default: 'ZAR',
  },
  escalationTerms: {
    type: String, // or a more complex object if needed
    required: true
  },
  renewalDates: {
    type: [Date],
    default: []
  },
  status: {
    type: String,
    enum: ['Active', 'Pending', 'Terminated', 'Expired'],
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
