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
      gps.forEach(function(me) {
        var newGps = new Gps();
        newGps.userId = user[0]._id
        newGps.latitude = me.latitude
        newGps.longitude = me.longitude
        newGps.timestamp = me.timestamp
        newGps.save(function(err) {
          if (err) {
            console.log(err);
            return res.json(400, err);
          }
          console.log('GPS saved');
        });
      });
      return res.send(200);
    }
  });
};

/**
  * Get GPS List
  */
exports.index = function (req, res, next) {
  var user = req.user;
  if (user) {
    Gps.find({ userId: user._id}).sort('-timestamp').limit(50).exec(function(err, gps) {
      if (err) return next(err);
      return res.json(200, gps);
    });
  } else {
    res.json(404, "");
  }

};

