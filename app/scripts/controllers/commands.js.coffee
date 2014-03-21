'use strict'

angular.module('nenokApp')
  .controller 'CommandsCtrl', ($scope, Auth, CommandData) ->
    $scope.commands = []

    Auth.currentUser().$promise.then (data) ->
      $scope.user = data

      CommandData.allCommands($scope.user).query (data) ->
        for command in data
          command.timestamp = moment(command.timestamp).format('LLL');
          $scope.commands.push(command)
