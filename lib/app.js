const express = require('express');
const app = express();

app.use(require('cors')());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1/cron', require('./routes/cron'));
app.use('/api/v1/results', require('./routes/results-routes'));
app.use('/api/v1/highscores', require('./routes/highscore'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
