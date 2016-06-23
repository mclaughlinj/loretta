var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/lg';
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');
var smtpTransport = require("nodemailer-smtp-transport");

var app = express();

/* GET contact page. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  res.render('home', {pageTitle: 'Loretta Garrison: contact', contact: true});
});

var mailUser = 'modpsy.mailer@gmail.com';
var mailPass = '';

var findMailUsers = function(db, callback) {
  var cursor = db.collection('mailUsers').find( { "user": mailUser } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
       mailPass = doc.password;
    } else {
       callback();
    }
  });
};

router.post('/', function(req, res, next) {
  console.log('post');
  var db = req.app.locals.db;
  findMailUsers(db, function() {

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(sendmailTransport({
      path: '/usr/sbin/sendmail'
    }));

    var transporterSmpt = nodemailer.createTransport((smtpTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: mailUser,
          pass: mailPass
      }
    })));

    // setup e-mail data with unicode symbols
    var mailOptions = {};
    console.log(app.get('env'));
    mailOptions = {
      from: 'modpsy.mailer@gmail.com', // sender address
      to: '629lart@gmail.com', // list of receivers
      subject: 'LG Printmaking Web Enquiry', // Subject line
      text: 'Name: ' + req.body.name
       + '\nEmail: ' + req.body.email
       + '\n\nMessage: ' + req.body.special
    };
    if (app.get('env') === 'development') {
      mailOptions.to = 'development@modpsy.co.uk';
    }

    console.log(mailOptions);

    transporterSmpt.sendMail(mailOptions, function (error, response) {
        //Email not sent
        if (error) {
            var success = {success: false};
            console.log(error);
            res.json(success);
        }
        //Yay!! Email sent
        else {
            var success = {success: true};
            console.log(response);
            res.json(success);
        }
    });






  });

});

module.exports = router;
