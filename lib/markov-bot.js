const text = 'Whatever you want here';

const Text = require('markov-chains-text').default;

function createNewSentence() {
  const sentenceData = new Text(text);
  let generatedSentence = sentenceData.makeSentence();
  while(generatedSentence.length > 280) {
    generatedSentence = sentenceData.makeSentence();
  }
  console.log(generatedSentence.length);
  return generatedSentence;
}
  
console.log(createNewSentence());
