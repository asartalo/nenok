"use strict"

angular.module("nenokApp")
  .factory "Command", ($resource) ->
    $resource "/api/commands/",
      isArray: false
