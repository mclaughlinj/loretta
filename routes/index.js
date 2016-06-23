var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {pageTitle: 'Loretta Garrison: Printmaker'});
});

module.exports = router;
