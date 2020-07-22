const { Router } = require('express');
const Result = require('../models/Result');
const chance = require('chance').Chance();

module.exports = Router()

  .get('/:sourceId', (req, res, next) => {
    Result
      .find({ source: req.params.sourceId })
      .populate('source', { fullName: true })
      .then(quotes => {
        return chance.pickone(quotes);
      })
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Result
      .find()
      .populate('source', { fullName: true })
      .then(quotes => {
        let quote = { source: null };
        while(!quote.source) quote = chance.pickone(quotes);
        return quote;
      })
      .then(quote => res.send(quote))
      .catch(next);
  });
