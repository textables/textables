const Source = require('./lib/models/Source');
const Markov = require('markov-chains-text').default;
const chance = require('chance').Chance();

async function generateText(person){
  let textStr = '';
  const text = await Source
    .find({ fullname: person })
    .populate('texts')
    .lean()
    .then(res => {
      res.texts.forEach(text => {
        textStr += ' ' + text;
        
      });
      return textStr;
    })
    .then(text => {
      const markov = new Markov(text);
      return markov.makeSentence();
    });

  //T.post('status/update', { status: text });
  
}

module.exports = { generateText };
