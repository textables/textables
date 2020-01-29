/* eslint-disable no-console */
const Source = require('../models/Source');
const Text = require('../models/Text');
const HighScore = require('../models/HighScore');

function seedSourceData(data) {
  return Source
    .create(data)
    .then(console.log('seedSourceData done'));
}

function seedTextData(data, id) {
  return Text
    .create({ ...data, source: id })
    .then(console.log('seedTextData done'));
}

function seedHighScoreData() {
  return HighScore
    .create({
      name: 'West',
      score: 0
    })
}

module.exports = {
  seedSourceData,
  seedTextData,
  seedHighScoreData
};
