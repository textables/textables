require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./connect');
const { seedHighScoreData } = require('./seed-function');


connect();

seedHighScoreData()
  .then(() => console.log('done'))
  .finally(() => mongoose.connection.close());
