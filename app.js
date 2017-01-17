const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require( 'volleyball' );
const nunjucks = require( 'nunjucks' );

let locals = {
  title: 'Fun Times',
  people: [
    {name: 'Ben'},
    {name: 'Jake'}
  ],
  hungry: false
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

// nunjucks.render('index.html', locals, function(err, output) {
//   if (err) throw err;
//   console.log(output);
// });

app.listen(3000, function () {
  console.log('Server listening');
});

app.use(volleyball);

app.get('/', function(req, res, next) {
  res.render('index', locals);
});

app.get('/news', function(req, res, next) {
  res.send('Here\'s the news');
});
