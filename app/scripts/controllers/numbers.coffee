'use strict'

angular.module('nenokApp')
  .controller 'NumbersCtrl', ($scope, Auth, NumberData) ->
    $scope.numbers = []
    Auth.currentUser().$promise.then (data) ->
      $scope.user = data
      NumberData.allNumbers($scope.user).query (data) ->
        for number in data
          number.timestamp = moment(number.timestamp).format('LLL');
          $scope.numbers.push(number)
