const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  contact: {
    email: String,
    phone: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Person', PersonSchema);