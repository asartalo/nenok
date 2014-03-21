'use strict'

angular.module('nenokApp')
  .controller 'MapCtrl', ($scope) ->
    $scope.mapdata = {name: 'Yo'}
    console.log($scope)
