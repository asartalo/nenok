"use strict"

angular.module("nenokApp")
  .factory "CommandData", ($resource) ->
    allCommands: (user) ->
      $resource "/api/commands/", { token: user.token, email: user.email },
          query:
            method: "GET"
            isArray: true
