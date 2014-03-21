'use strict';

var mongoose = require('mongoose')
, Command = mongoose.model('Command');


/**
 * Create command
 */
exports.create = function (req, res, next) {
  var newCommand = new Command(req.body);
  newCommand.provider = 'local';
  newCommand.save(function(err) {
    if (err) {
      console.log(err);
      return res.json(400, err);
    }
    console.log('Command saved');
  });
};


/**
 * Get Commands List
 */
exports.index = function (req, res, next) {
  Command.find({}, function(err, objs){
    res.json(200, objs)
  });
};
