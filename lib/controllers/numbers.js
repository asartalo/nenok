'use strict';

var mongoose = require('mongoose'), pNumber = mongoose.model('Number'), 
    User = mongoose.model('User'), passport = require('passport');

/**
  * Create Number
  */
exports.create = function(req, res, next) {
  var email, numbers, token;
  token = req.param('token');
  email = req.param('email');
  numbers = req.param('numbers');
  return User.find({
    token: token,
    email: email
  }, function(err, user) {
    var number, userId, _i, _len, _results;
    if (err) return next(err);
    if (user.length === 0) 
      return res.send(404);
    else {
      numbers = JSON.parse(numbers);
      numbers.forEach(function(me) {
        var newPNumber = new pNumber();
        newPNumber.userId = user[0]._id
        newPNumber.value = me.value
        newPNumber.timestamp = me.timestamp
        newPNumber.save(function(err) {
          if (err) {
            console.log(err);
            return res.json(400, err);
          }
          console.log('Number saved');
        });
      });
      return res.send(200);
    }
  });
};

/**
  * Get Number List
  */
exports.index = function (req, res, next) {
  var token = req.param('token');
  var email = req.param('email');
  console.log(token+" "+email);
  User.find({'token': token, "email": email}).sort('-timestamp').limit(50).exec(function (err, user) {
    if (err) return next(err);
    if(user.length == 0) 
      return res.send(404);
    else {
      pNumber.find({'userId': user[0]._id}, function (err, numbers) {
        if (err) return next(err);
        res.json(200, numbers);
      });
    }
  });
};
