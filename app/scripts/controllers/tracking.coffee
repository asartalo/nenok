'use strict'

angular.module('nenokApp')
  .controller 'TrackingCtrl',
    [
      '$scope', 'Gps', 'Auth', 'NumberData',
      ($scope, Gps, Auth, NumberData) ->
        $scope.gps = []
        $scope.numbers = []

        Gps.get (data) ->
          for coordinates in data
            $scope.gps.push(coordinates)
          $scope.map =
            center:
              longitude: 121.058121
              latitude: 14.5915003
            markers: $scope.gps
            zoom: 12

        Auth.currentUser().$promise.then (data) ->
          $scope.user = data
          NumberData.allNumbers($scope.user).query (data) ->
            for number in data
              number.timestamp = moment(number.timestamp).format('LLL');
              $scope.numbers.push(number)
    ]
