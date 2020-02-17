const Source = require('./lib/models/Source');
require('./lib/models/Text');
const randomizer = require('./lib/utils/randomizer');
const twitterPost = require('./lib/utils/twitter-post');


const tweetQuote = () => {
  return randomizer()
    .then(source => Source.returnQuoteObject(source))
    .then(quoteObj => twitterPost(quoteObj));
};

module.exports = tweetQuote;
