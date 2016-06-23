var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/lg';

/* GET blog page. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var collection = db.collection('gallery');
  collection.find().toArray(function(err, galleryItems) {
    var gallery = {
      galleryItems: galleryItems
    };
    res.render('home', {pageTitle: 'Loretta Garrison: Blog', blog: true});
  });
});

router.post('/', function(req, res, next) {
  var db = req.app.locals.db;
  var collection = db.collection('gallery');
  collection.find().toArray(function(err, galleryItems) {
    var gallery = {
      galleryItems: galleryItems
    };
    res.json(gallery);
  });
});

module.exports = router;
