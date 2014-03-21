'use strict'

angular.module('nenokFilters', []).filter 'formatDate', ->
  (timestamp) ->
    moment(timestamp).format('LLL')
