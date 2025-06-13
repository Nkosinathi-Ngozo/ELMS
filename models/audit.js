// models/AuditLog.ts

import mongoose, { Schema, Document } from 'mongoose';

const AuditLogSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  module: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('AuditLog', AuditLogSchema);