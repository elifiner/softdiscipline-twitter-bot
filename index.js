// cron scheduled at cron-job.org @ eli.finer+soft.discpline@gmail.com

const Twitter = require('twitter');
const express = require('express');
const S = require('tiny-dedent');
const moment = require('moment');
const tweets = require('./tweets.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  if (req.query.token === process.env.URL_TOKEN) {
    tweet(tweets.daily);
    res.send('OK ' + moment().format());
  } else {
    res.status(403).send('Access denied');
  }
});

app.listen(port, () => {
  console.log(`Soft Discpline Twitter Bot listening at http://localhost:${port}`);
});

function tweet(status) {
  var client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET
  });
  
  client.post('statuses/update', {status}).catch(console.error);
}
