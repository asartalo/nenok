'use strict'

angular.module('nenokApp')
  .controller 'MapCtrl',
    [
      '$scope', 'Gps'
      ($scope, Gps) ->
        $scope.gps = []
        Gps.get (data) ->
          for coordinates in data
            $scope.gps.push(coordinates)
          $scope.map =
            center:
              longitude: 121.058121
              latitude: 14.5915003
            markers: $scope.gps
            zoom: 12
    ]
