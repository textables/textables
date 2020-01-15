require('dotenv').config();
require('../utils/connect')();

const { seedSourceData, seedTextData } = require('./seed-function');
const allKanye = require('../kanyeSeedFunctions');
const sources = require('../data/sources-object');

Promise.all(allKanye())
  .then(lyrics => {
    console.log(lyrics);
    seedTextData({ text: lyrics[0] }, '5e1e511c46795e1e5d27356f');
        
  });
