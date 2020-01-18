const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  },
  score: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('HighScore', schema);
