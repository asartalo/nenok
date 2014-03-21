'use strict'

angular.module('nenokApp')
  .controller 'MapCtrl',
    [
      '$scope',
      ($scope) ->
        $scope.map = {
          center: {
            longitude: 121.058121
            latitude: 14.5915003
          },
          markers: [
            {
              longitude: 121.058121
              latitude: 14.5915003
              title: 'Marker 1'
            },
            {
              longitude: 121.078121
              latitude: 14.6215003
              title: 'Marker 2'
            }
          ],
          zoom: 14
        }
    ]
