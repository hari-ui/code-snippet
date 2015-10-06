/*
Programming challenge  
Author: Harinath Veligandla
*/

/* 
Remember to test this on chrome with CORS extension installed. 
Otherwise console will throw No 'Access-Control-Allow-Origin' header is present on the requested resource. 
Origin 'http://localhost' is therefore not allowed access.
CORS Externsion for Chrome can be installed from the link below.
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en	
*/

// Create module meowApp
var app = angular.module('meowApp', []);
    app.controller('catsCtrl', function($scope, $http) { // Add controller to module
    $http.get("http://agl-developer-test.azurewebsites.net/people.json") 
      .success(function(data) {
          $scope.people = data;                     
      });
});