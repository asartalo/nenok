'use strict'

mongoose = require 'mongoose'
Number = mongoose.model 'Number'
User = mongoose.model 'User'
passport = require 'passport'

# Create Number
exports.create = (req, res, next) ->
  token = req.param('token')
  email = req.param('email')
  numbers = JSON.parse(req.param('numbers'))

  User.find {token: token, email: email}, (err, user) ->
    return next(err) if err
    if user.length == 0
      res.send(404)
    else
      for number in numbers
        number = new Number(
          userId = user[0]._id
        )
