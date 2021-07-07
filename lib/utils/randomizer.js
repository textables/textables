const Source = require('../models/Source');
const chance = require('chance').Chance();

module.exports = async() => {
  const [source] = await Source.getRandom(1);
  return source.fullName;
};
