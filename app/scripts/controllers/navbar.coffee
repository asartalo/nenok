'use strict'

angular.module('nenokApp')
  .controller 'NavbarCtrl', ($scope, $location, Auth) ->
    $scope.menu = [
      title: 'Home'
      link: '/'
    ,
      title: 'Settings'
      link: '/settings'
    ,
      title: 'Commands'
      link: '/commands'
    ,
      title: 'Tracking'
      link: '/tracking'
    ]

    $scope.logout = ->
      Auth.logout().then ->
        $location.path "/login"

    $scope.isActive = (route) ->
      route is $location.path()
