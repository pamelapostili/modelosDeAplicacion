const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dates: [{
    type: Date,
    required: true,
  }],
  responsible: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Activa', 'Inactiva'],
    default: 'Activa',
  },
});

module.exports = mongoose.model('Inventory', InventorySchema);