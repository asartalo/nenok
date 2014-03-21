'use strict'

angular.module('nenokApp')
  .factory 'Gps',  ($resource) ->
    $resource "/api/gps", {},
    get:
      method: "GET"
      isArray: true

