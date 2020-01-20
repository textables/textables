/* eslint-disable no-console */
const Source = require('../models/Source');
const Text = require('../models/Text');
const HighScore = require('../models/HighScore');

function seedSourceData(data) {
  Source
    .create(data)
    .then(console.log('seedSourceData done'));
}

function seedTextData(data, id) {
  Text
    .create({ ...data, source: id })
    .then(console.log('seedTextData done'));
}

function seedHighScoreData() {
  console.log('Started');
  HighScore
    .create({
      name: 'West',
      score: 0
    })
    .then(res => {
      console.log(res);
      console('Finished');
    });
} 

module.exports = {
  seedSourceData,
  seedTextData,
  seedHighScoreData
};
