'use strict'

angular.module('nenokApp')
  .controller 'CommandsCtrl', ($scope, Command) ->
    $scope.commands = Command.query()
