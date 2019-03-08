var express = require('express');
var router = express.Router();
var data = require('../data');

data.title = `Welcome to Express with Node`;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('data:', data);
  res.render('index', data);
});

module.exports = router;
