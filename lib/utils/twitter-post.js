/* eslint-disable no-console */
require('dotenv').config();
const twit = require('twit');
const twitConfig = require('./twitter-config');

const T = new twit(twitConfig);

module.exports = async(obj) => {
  T.post('status/update', `${obj.quote} -${obj.source}`, tweeted);
  
  function tweeted(err, data) {
    if(err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
    }
  }
};
