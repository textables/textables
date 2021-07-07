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
      .sort({ score: -1 })
      .then(highscores => res.send(highscores))
      .catch();
  })

  .get('/lowest', (req, res, next) => {
    // use find one to only find the lowest score
    HighScore
      .findOne()
      .sort({ score: 1 })
      .then(highscore => res.send(highscore))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    HighScore
      .findByIdAndDelete(req.params.id)
      .then(highscore => res.send(highscore))
      .catch(next);
  })

  .delete('/lowest/delete', (req, res, next) => {
    HighScore
      .findOneAndDelete({}, {
        sort: { score: 1 }
      })
      .then(lowscore => res.send(lowscore))
      .catch(next);
  });
