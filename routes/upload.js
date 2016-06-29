var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/lg';
var lwip = require('lwip');

/* GET upload page. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var collection = db.collection('gallery');
  collection.find().toArray(function(err, galleryItems) {
    var gallery = {
      galleryItems: galleryItems
    };
    res.render('home', {pageTitle: 'Loretta Garrison: Printmaker'});
  });
});

/* Update content item */
router.post('/', function(req, res, next) {
  var db = req.app.locals.db;
  var collectionUpdate = req.body.collection;
  var collection = db.collection(collectionUpdate);
  var idObj = new ObjectId(req.body.id);

  if (req.body.updateCurrent === "true") {
    current = true;
  } else {
    current = false;
  }
  if (req.body.updateShade === "true") {
    shade = true;
  } else {
    shade = false;
  }
  if (req.body.updateBlog === "true") {
    blog = true;
  } else {
    blog = false;
  }
  var update = {
    fileName: req.body.updateFileName,
    title: req.body.updateTitle,
    description: req.body.updateDescription,
    longDesc: req.body.updateLongDesc,
    current: current,
    shade: shade,
    blog: blog
  };
  collection.updateOne({
    '_id' : idObj
  },
  {
    $set: update
  }, function(err, galleryItem) {
    assert.equal(err, null);
    if (galleryItem) {
      console.log('Found');
      console.log(galleryItem.result);
//           lwip.open('./public/img/tester.jpg', function(err, image){
//             if (err) {
//               console.log('error ' + err);
//             }
//             image.scale(0.5, function(err, image){
//               image.writeFile('./public/img/output.jpg', function(err){
//               });
//             });
//           });
      res.json({'updated':true});
    } else {
      console.log({galleryItem: false});
      res.json({'updated':false});
    }
  });






});

module.exports = router;
