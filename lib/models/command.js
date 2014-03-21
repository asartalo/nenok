'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var CommandSchema = new Schema({
  action: {type: String, required: true},
  keyphrase: {type: String, required: true}
});

CommandSchema.virtual('info').get(function() {
  return {
    'action': this.userId,
    'keyphrase': this.value
  };
});

module.exports = mongoose.model('Command', CommandSchema);
