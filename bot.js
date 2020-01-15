require('dotenv').config();
require('./lib/utils/connect')();
const Source = require('./lib/models/Source');
require('./lib/models/Text');
const randomizer = require('./lib/utils/randomizer');
const twitterPost = require('./lib/utils/twitter-post');


const tweetQuote = async() => {
  const randomSource = await randomizer();
  const quoteObject = await Source.returnQuoteObject(randomSource);
  twitterPost(quoteObject);
};

tweetQuote();
