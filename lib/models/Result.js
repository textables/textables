const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tweetText: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Source',
    required: true
  }
},
{
  toJSON: {
    virtuals: true
  }
});

module.exports = mongoose.model('Result', schema);
