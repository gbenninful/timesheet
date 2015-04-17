'use strict';

/**
 * @ngdoc:timesheetApp.controller:NavbarCtrl
 * @name:NavbarCtrl
 * @description:
 * #Controller for the navigation bar
 */
angular.module('timesheetApp').controller('NavbarCtrl', function($scope,$state){
  $scope.user = {};
  $scope.user.logout = function(){
    $state.go('logout',{authorize : false});
  };
});
