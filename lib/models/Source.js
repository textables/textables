const mongoose = require('mongoose');
const Result = require('./Result');
const Markov = require('markov-chains-text').default;
const { createNewSentence } = require('../createNewSentence');

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  }
},
{
  toJSON: {
    virtuals: true
  }
});

schema.virtual('texts', {
  ref: 'Text',
  localField: '_id',
  foreignField: 'source'
});

schema.statics.returnQuoteObject = function(fullName) {
  return this
    .findOne({ fullName })
    .lean()
    .populate('texts')
    .then(res => {
      let textStr = '';
      res.texts.forEach(text => {
        textStr += ' ' + text.text;
      });
      return [textStr, res.fullName, res._id];
    })
    .then(text => {
      const markov = new Markov(text[0]);
      return {
        quote: createNewSentence(markov),
        source: text[1],
        sourceId:  text[2]
      };
    })
    .then(res => {
      return Promise.all([
        res,
        Result
          .create({
            tweetText: res.quote,
            source: res.sourceId
          })
      ]);
    })
    .then(([res]) => res);
};


module.exports = mongoose.model('Source', schema);

