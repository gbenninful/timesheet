'use strict';

/**
 * @ngdoc: function
 * @name: timesheetApp.controller:HomeCtrl
 * @description
 * #HomeCtrl
 */

angular.module('timesheetApp')
  .controller('HomeCtrl', function($scope, Azure){

  Azure.getUsers().then(function(data){
      $scope.allUsers = data;
    },function(error){
      console.log(error.message," Reading users failed.");
    });

});
