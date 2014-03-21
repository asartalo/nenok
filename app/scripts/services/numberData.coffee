"use strict"

angular.module("nenokApp")
  .factory "NumberData", ($resource) ->
    allNumbers: (user) ->
      $resource "/api/numbers", { token: user.token, email: user.email },
          query:
            method: "GET"
            isArray: true
