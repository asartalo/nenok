'use strict'

mongoose = require 'mongoose'
Schema = mongoose.Schema

NumberSchema = new Schema(
  userId: String
  timestamp: Number
  value: String
)

NumberSchema
  .virtual('info')
  .get ->
    'timestamp': @timestamp
    'value': @value

module.exports = mongoose.model('Number', NumberSchema)
