'use strict';

var mongoose = require('mongoose'), Command = mongoose.model('Command'),
    User = mongoose.model('User');


/**
 * Create command
 */
exports.create = function (req, res, next) {
  var email, commands, token;
  token = req.param('token');
  email = req.param('email');
  commands = req.param('commands');
  return User.find({
    token: token,
    email: email
  }, function(err, user) {
    var command, userId, _i, _len, _results;
    if (err) return next(err);
    if (user.length === 0) 
      return res.send(404);
    else {
      console.log(commands);
      commands = JSON.parse(commands);
      commands.forEach(function(me) {
        var newCommand = new Command();
        newCommand.userId = user[0]._id
        newCommand.action = me.value
        newCommand.keyphrase = me.keyphrase
        newCommand.timestamp = me.timestamp
        newCommand.save(function(err) {
          if (err) {
            console.log(err);
            return res.json(400, err);
          }
          console.log('Command saved');
        });
      });
      return res.send(200);
    }
  });
};


/**
 * Get Commands List
 */
exports.index = function (req, res, next) {
  var token = req.param('token');
  var email = req.param('email');
  console.log(token+" "+email);
  User.find({'token': token, "email": email}, function (err, user) {
    if (err) return next(err);
    if(user.length == 0) 
      return res.send(404);
    else {
      Command.find({'userId': user[0]._id}, function (err, commands) {
        if (err) return next(err);
        res.json(200, commands);
      });
    }
  });
};
