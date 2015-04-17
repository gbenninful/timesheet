'use strict';

/**
 * @ngdoc function
 * @name nannyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nannyApp
 */
angular.module('timesheetApp')
  .controller('LoginCtrl', function($scope,$state, Azure){

    $scope.user = {
      login : login,
      register : register
    };

    function register (form) {
      if(form.$valid){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yy = today.getFullYear();
        $scope.user.data.registeredDate = mm + '/' + dd + '/'+ yy ;
        $scope.user.data.emailVerified = false ;

        Azure.register($scope.user.data).then(function(){
          console.log("success");
        },function(error){
          console.log("error ",error);
        });
      }
    }

    function login (form){
      if(form.$valid){
        console.log($scope.user.data);
        //SETCOOKIE
        $state.go('home',{authorize:true});
      }
    }



  });
