require('dotenv').config();
const connect = require('./connect');
const { seedHighScoreData } = require('./seed-function');


connect();

seedHighScoreData();
