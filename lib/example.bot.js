const text = require('./pandp');

var Text = require('markov-chains-text').default;
var fakeText = new Text(text);

console.log(fakeText.makeSentence());
