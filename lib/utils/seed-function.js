/* eslint-disable no-console */
const Source = require('../models/Source');
const Text = require('../models/Text');

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

module.exports = {
  seedSourceData,
  seedTextData
};
