const text = 'whatever you want in here';

const Text = require('markov-chains-text').default;

const generatedSentence = new Text(text);

console.log(generatedSentence.makeSentence());