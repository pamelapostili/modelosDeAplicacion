const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  building: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Location', LocationSchema);