const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.listen(3000, function () {
  console.log('Server listening');
});

app.get('/', function(req, res, next) {
  res.send('Welcome. I\'m useless');
});
