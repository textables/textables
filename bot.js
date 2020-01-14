const Source = require('./lib/models/Source');
const Markov = require('markov-chains-text').default;
const createNewSentence = require('./lib/createNewSentence');

//THIS DOC NEEDS TO BE EDITED BEFORE TWITTER

async function generateText(firstName){
  
  //eventually delete the return
  return await Source
  //finding by first name will be an issues if we have more that one person with that name
  //we tried finding by full name and that didn't work.
    .findOne({ firstName: firstName })
    .populate('texts')
    .then(res => {
      let textStr = '';
      //console log for testing only
      console.log(res);
      res.texts.forEach(text => {
        textStr += ' ' + text;
      });
      return textStr;
    })
    .then(text => {
      const markov = new Markov(text);
      return `${createNewSentence(markov)} - ${'Source'}`;

    });

  //uncomment below for Twitter
  //.then the next line
  //T.post('status/update', { status: text });
  
}

module.exports = { generateText };
