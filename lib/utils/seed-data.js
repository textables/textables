require('dotenv').config();
require('../utils/connect')();

const { seedSourceData, seedTextData } = require('./seed-function');
// const aliceData = require('../data/alice-in-wonderland');
// const brothersData = require('../data/brothers-karamazov');
// const caskData = require('../data/cask-of-amontillado');
// const crimeData = require('../data/crime-and-punishment');
// const huckData = require('../data/huck-finn');
// const murdersData = require('../data/murders-in-rue-morgue');
// const prideData = require('../data/pride-and-prejudice');
// const senseData = require('../data/sense-and-sensibility');
// const telltaleData = require('../data/telltale-heart');
// const theHouseData = require('../data/the-house-of-usher');
// const lookingGlassData = require('../data/through-the-looking-glass');
// const tomData = require('../data/tom-sawyer');
const sources = require('../data/sources-object');

seedTextData(senseData, '5e1e4ec52d2b701b5aaf0226');
