const router = require('express').Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  res.render( 'index', { tweets: list } );
});
// router.get('/stylesheets/style.css', function(req, res) {
// 	res.sendFile('/public/stylesheets/style.css', { root : __dirname + '/..'});
// })
router.get('/tweets/:nid', function(req, res) {
  var nid = req.params.nid;
  var list = tweetBank.find( {id: parseInt(nid, 10)} );
  res.render( 'index', { tweets: list } );
});

module.exports = router;