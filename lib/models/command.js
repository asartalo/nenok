'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var CommandSchema = new Schema({
  userId: {type: String, required: true},
  action: {type: String, required: true},
  keyphrase: {type: String, required: true},
  timestamp: Number
});

CommandSchema.virtual('info').get(function() {
  return {
    'userId': this.userId,
    'action': this.action,
    'keyphrase': this.keyphrase,
    'timestamp': this.timestamp
  };
});

module.exports = mongoose.model('Command', CommandSchema);
