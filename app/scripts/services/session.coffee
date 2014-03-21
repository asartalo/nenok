'use strict'

angular.module('nenokApp')
  .factory 'Session', ($resource) ->
    $resource '/api/session/'
