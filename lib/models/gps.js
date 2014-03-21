'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
  
var GpsSchema = new Schema({
  userId: {type: String, required: true},
  longitude: {type: String, required: true},
  latitude: {type: String, required: true},
  timestamp: Number
});

GpsSchema
  .virtual("info")
  .get(function() {
    return {
      'userId': this.userId,
      'longitude': this.longitude,
      'latitude': this.latitude,
      'timestamp': this.timestamp
    };
  });

module.exports = mongoose.model('Gps', GpsSchema);
