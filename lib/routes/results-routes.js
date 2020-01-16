const { Router } = require('express');
const Result = require('../models/Result');
const chance = require('chance').Chance();

module.exports = Router()

  .get('/:sourceId', (req, res, next) => {
    Result
      .find({ source: req.params.sourceId })
      .then(quotes => {
        return chance.pickone(quotes);
      })
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Result
      .find()
      .then(quotes => {
        return chance.pickone(quotes);
      })
      .then(quote => res.send(quote))
      .catch(next);
  });


  