const text = 'whatever you want in here';

const sense = require('./data/sense-and-sensibility');
const alice = require('./data/alice-in-wonderland');
const lookingGlass = require('./data/through-the-looking-glass');

const Text = require('markov-chains-text').default;

const books = `${alice.text}${lookingGlass.text}`;

const generatedSentence = new Text(books);

console.log(generatedSentence.makeSentence());
