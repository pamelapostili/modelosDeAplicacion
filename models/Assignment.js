const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true,
  },
  observation: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Activa', 'Inactiva'],
    default: 'Activa',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Assignment', AssignmentSchema);