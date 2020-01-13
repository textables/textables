const Source = require('../models/Source');
const Text = require('../models/Text');

async function seedSourceData(sourceObject) {
  await Source.create({
    firstName: sourceObject.firstName,
    lastName: sourceObject.lastName
  });
}

async function seedTextData(textObject, sourceId) {
  await Text.create({
    text: textObject.text,
    source: sourceId,
    medium: textObject.medium
  });
}

module.exports = {
  seedSourceData,
  seedTextData
};
