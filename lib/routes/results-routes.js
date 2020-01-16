const { Router } = require('express');
const Result = require('../models/Result');

module.exports = Router()

  .get('/results/:sourceId', (req, res, next) => {
    Result
      .getSourceQuotes(req.params.sourceId)
      .findOne()
      .then(quote => res.send(quote))
      .catch(next);
  });
