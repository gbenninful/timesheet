'use strict';

angular.module('timesheetApp').config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login',{
          url: '/',
          controller: 'LoginCtrl',
          templateUrl: 'modules/login/login.html'
      })
      .state('logout',{
          url: '/logout',
          controller: 'LogoutCtrl',
          templateUrl: 'modules/logout/logout.html'
      })
      .state('home',{
          url: '/home',
          controller: 'HomeCtrl',
          templateUrl: 'modules/home/home.html'
      })
      .state('parent',{
        url: '/parent',
        controller: 'ParentCtrl',
        templateUrl: 'modules/parent/parent.html'
      })
      .state('caregiver',{
        url: '/caregiver',
        controller: 'CareGiverCtrl',
        templateUrl: '../modules/careGiver/careGiver.html'
      });

    $urlRouterProvider.otherwise('/');
});
