'use strict'

angular.module('nenokApp')
  .controller 'CommandsCtrl', ($scope, Auth, CommandData) ->
    $scope.commands = []

    Auth.currentUser().$promise.then (data) ->
      $scope.user = data
