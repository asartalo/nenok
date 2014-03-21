'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
  
var GpsSchema = new Schema({
  userId: String,
  long: String,
  lat: String
});

GpsSchema
  .virtual("info")
  .get(function() {
    return {
      'long': this.long,
      'lat': this.lat
    };
  });

module.exports = mongoose.model('Gps', GpsSchema);
