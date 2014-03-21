'use strict'

angular.module('nenokApp')
  .controller 'SignupCtrl', ($scope, Auth, $location) ->
    $scope.user = {}
    $scope.errors = {}
    
    $scope.register = (form) ->
      $scope.submitted = true

      if form.$valid
        Auth.createUser(
          name: $scope.user.name
          email: $scope.user.email
          password: $scope.user.password
        ).then( ->
          # Account created, redirect to home
          $location.path '/'
        ).catch( (err) ->
          err = err.data
          $scope.errors = {}
          
          # Update validity of form fields that match the mongoose errors
          angular.forEach err.errors, (error, field) ->
            if field == "hashedPassword" then field = "password"
            form[field].$setValidity 'mongoose', false
            $scope.errors[field] = error.message
        )
