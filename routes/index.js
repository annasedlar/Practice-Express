var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HI ANNA I AM EXPRESS!', express: 'Express' });
});

module.exports = router;
