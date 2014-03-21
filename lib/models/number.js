'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var NumberSchema = new Schema({
  userId: {type: String, required: true},
  value: {type: String, required: true},
  timestamp: Number
});

NumberSchema.virtual('info').get(function() {
  return {
    'userId': this.userId,
    'value': this.value,
    'timestamp': this.timestamp
  };
});

module.exports = mongoose.model('Number', NumberSchema);
