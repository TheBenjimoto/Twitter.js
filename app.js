const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.listen(3000, function () {
  console.log('Server listening');
});

app.use('/', function(req, res, next) {
  console.log('Incoming: ' + req.method + '; ' + req.url);
  next();
});

app.get('/', function(req, res, next) {
  res.send('Welcome. I\'m useless');
});

app.get('/news', function(req, res, next) {
  res.send('Here\'s the news');
});
