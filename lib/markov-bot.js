const text = 'whatever you want in here';

const sense = require('./data/sense-and-sensibility');

const Text = require('markov-chains-text').default;

const generatedSentence = new Text(sense.text);

console.log(generatedSentence.makeSentence());
