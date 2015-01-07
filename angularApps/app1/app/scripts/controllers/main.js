'use strict';

/**
 * @ngdoc function
 * @name app1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app1App
 */
angular.module('app1App')
	.controller('MainController', ['$scope', '$location',function ($scope, $location) {
     $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };

  }])
  .controller('HomeCtrl', ['$scope', '$location',function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }])
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
