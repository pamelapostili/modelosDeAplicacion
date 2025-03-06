const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Mobiliario de oficina', 'Equipo de cómputo', 'Otros'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Sin determinar', 'Malo', 'Regular', 'Bueno', 'Excelente'],
    default: 'Sin determinar',
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Article', ArticleSchema);