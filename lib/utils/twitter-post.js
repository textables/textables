/* eslint-disable no-console */
require('dotenv').config();
// this is a class. capitalize it.
const Twit = require('twit');
const twitConfig = require('./twitter-config');

// no need to instantiate a new Twit each time your function is called
const twit = new Twit(twitConfig);

// this does not need to be an async function
module.exports = (obj) => {
  // make a promise here so you can wait for the status to finish
  return new Promise((resolve, reject) => {
    twit.post('statuses/update', { status: `"${obj.quote}" \n- ${obj.source}` }, (err, data) => {
      if(err) {
        console.log(err);
        reject(err);
      } else {
        console.log('Success: ' + data.text);
        resolve(data);
      }
    });
  });

};
