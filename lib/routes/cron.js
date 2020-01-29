require('dotenv').config();
const { Router } = require('express');
const tweetQuote = require('../../bot');

module.exports = Router()

  .post(`/${process.env.TWITTER}`, (req, res, next) => {
    // since bot.js returns a promise
    // and twitter-post returns a promise
    // we can wait for the promise to resolve.
    // if successful we send back complete
    tweetQuote()
      .then(() => res.send('complete'))
      .catch(next);
  });
