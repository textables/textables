const Source = require('../models/Source');

module.exports = async() => {
  const [source] = await Source.getRandom(1);
  return source.fullName;
};
