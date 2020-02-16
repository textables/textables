require('dotenv').config();
const Twit = require('twit');
const twitConfig = require('./twitter-config');

const twit = new Twit(twitConfig);

module.exports = (obj) => {
  return new Promise((resolve, reject) => {
    twit.post('status/update', { status: `"${obj.quote}" \n- ${obj.source}` }, (err, data) => {
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
