const Source = require('../models/Source');
const chance = require('chance').Chance();

module.exports = async() => {
  const sources = await Source.find();
  const sourceNames = sources.map(source => {
    return source.fullName;
  });
  return chance.pickone(sourceNames);
};
