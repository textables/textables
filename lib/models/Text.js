const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Source',
    required: true
  },
  medium: String
},
{
  toJSON: {
    virtuals: true
  }
});

module.exports = mongoose.model('Text', schema);
