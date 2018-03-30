var express = require('express');
var router = express.Router();
var pjson = require('./../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: pjson.name });
});

module.exports = router;
