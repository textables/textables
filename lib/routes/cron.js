require('dotenv').config();
const { Router } = require('express');
const tweetQuote = require('../../bot');

module.exports = Router()
  .post(`/${process.env.TWITTER}`, (req, res, next) => {
    tweetQuote()
      .then(res => res.send('complete'))
      .catch(next);
  });
