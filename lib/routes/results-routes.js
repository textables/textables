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
        return chance.pickone(quotes);
      })
      .then(quote => res.send(quote))
      .catch(next);
  })

  .delete('/', (req, res, next) => {
    Result
      .deleteMany({ source: '5e1e511c46795e1e5d27356f' })
      .then(kanyeQuotes => res.send(kanyeQuotes))
      .catch(next);
  });
