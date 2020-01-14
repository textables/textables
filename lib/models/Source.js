const mongoose = require('mongoose');
const Markov = require('markov-chains-text').default;
const createNewSentence = require('../createNewSentence');

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
    .populate('texts')
    .then(res => {
      console.log(res)
      let textStr = '';
      //console log for testing only
      res.texts.forEach(text => {
        textStr += ' ' + text.text;
      });
      console.log(textStr.length);
      return [textStr, res.fullName, res._id];
    })
    .then(text => {
      const markov = new Markov(text[0]);
      return {
        quote: createNewSentence(markov),
        source: text[1],
        sourceId:  text[2]
      };
    });
};


module.exports = mongoose.model('Source', schema);

