'use strict'

angular.module('nenokApp')
  .controller 'MapCtrl',
    [
      '$scope', 'Gps'
      ($scope, Gps) ->
        $scope.map =
          center:
            longitude: 121.058121
            latitude: 14.5915003
          markers: Gps.get()
          zoom: 12
          path: Gps.get()
    ]
