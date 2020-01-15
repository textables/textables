const { Router } = require('express');
const tweetQuote = require('../../bot');

module.exports = Router()

  .post('/', (req, res, next) => {
    tweetQuote();
    Promise.resolve(res.send('complete'))
      .catch(next);
  });
