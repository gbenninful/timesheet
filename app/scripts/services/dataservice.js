'use strict';

/**
 * @ngdoc service
 * @name timesheetApp.DataService
 * @description
 * # DataService
 * Service in the timesheetApp.
 */
angular.module('timesheetApp')
  .service('Azure', function ($http, $q) {
    var APP_KEY = 'GrQJWEFEicvFpPMGmVOcpTtBZaWdPX28';
    var APP_URL = 'https://timelogger.azure-mobile.net/';
    var client = new WindowsAzure.MobileServiceClient(APP_URL, APP_KEY);
    var userTable = client.getTable('users');

    return {

      register: function(obj){
        var deferred = $q.defer();
        userTable.insert(obj).then(function(results){
          deferred.resolve(results);
        }, function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      },



      logIn: function(){
        if (sessionStorage.loggedInUser) {
          client.currentUser = JSON.parse(sessionStorage.loggedInUser);
        } else {
          // Regular login flow
          client.login("facebook", {"access_token": token}).done(function (results) {
            alert("You are now logged in as: " + results.userId);
          }, function (err) {
            alert("Error: " + err);
          });
          sessionStorage.loggedInUser = JSON.stringify(client.currentUser);
        }
      },
      logOut: function(){
        client.logout();
        sessionStorage.loggedInUser = null;
      },


      getUsers: function () {
        var deferred = $q.defer();
        userTable.read().then(function(results){
          deferred.resolve(results);
        },function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      }


    }


  });
