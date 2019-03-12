var express = require('express');
var router = express.Router();
var data = require('../data');

data.title = `Welcome to Express with Node`;

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('data:', data);
  res.render('index', {name: "Our Generic App", role: "default role"});
});

router.get('/:user', (req, res, next) => {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
