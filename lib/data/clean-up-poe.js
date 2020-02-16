const caskObject = require('./cask-of-amontillado');
const heartObject = require('./telltale-heart');
const murderObject = require('./murders-in-rue-morgue');

const caskText = caskObject.text;
const heartText = heartObject.text;
const murderText = murderObject.text

//input is object.text aka one giant string
const arrayOfPoeStrings = (wholeText) => {
  return wholeText.split('.');
};

const caskArray = arrayOfPoeStrings(caskText);
const heartArray = arrayOfPoeStrings(heartText);
const murderArray = arrayOfPoeStrings(murderText);

module.exports = { caskArray, heartArray, murderArray };
