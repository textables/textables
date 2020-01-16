const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tweetText: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Source',
    required: true
  }
},
{
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      delete ret.id;
    }
  }
});

schema.statics.getSourceQuotes = function(chosenSource) {
  this  
    .find({ source: chosenSource });
};

module.exports = mongoose.model('Result', schema);
