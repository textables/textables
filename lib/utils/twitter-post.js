/* eslint-disable no-console */
require('dotenv').config();
const twit = require('twit');
const twitConfig = require('./twitter-config');


module.exports = async(obj) => {
  const T = new twit(twitConfig);
  T.post('statuses/update', { status: `"${obj.quote}" \n- ${obj.source}` }, tweeted);
  
  function tweeted(err, data) {
    if(err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
    }
  }
};
