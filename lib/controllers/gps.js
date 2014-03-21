'use strict';

var mongoose = require('mongoose'),
    Gps = mongoose.model('Gps'),
    User = mongoose.model('User'),
    passport = require('passport');

/**
  * Create GPS
  */
exports.create = function (req, res, next) {
  var token = req.param('token');
  var email = req.param('email');
  var gps = req.param('gps');
  User.find({'token': token, "email": email}, function (err, user) {
    if (err) return next(err);
    if(user.length == 0) 
      return res.send(404);
    else {
      gps = JSON.parse(gps);
      return res.send(200);
    }
  });

};
