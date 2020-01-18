const { Router } = require('express');
const HighScore = require('../models/HighScore');

module.exports = Router()
  .post('/', (req, res, next) => {
    HighScore
      .create(req.body)
      .then(highscore => res.send(highscore))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    HighScore
      .find()
      .then(highscore => res.send(highscore))
      .catch();
  });