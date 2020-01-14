/* eslint-disable no-console */
require('dotenv').config();
const twit = require('twit');
const Source = require('../models/Source');
const twitConfig = require('./twitter-config');

const T = new twit(twitConfig);

module.exports = async(fullname) => {
  const quoteObj = await Source.returnQuoteObject(fullname);
  const stream = T.stream('user');


  stream.on('reply', replyToTweet);

  function replyToTweet(tweet){
    // const userName = tweet.user.screen_name;
    const thread = tweet.id_str;

    T.post('status/update', { status: `${quoteObj.quote} -${quoteObj.source}`, in_reply_to_status_id: thread }, tweeted);
  }

  function tweeted(err, data) {
    if(err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
    }
  }
};
