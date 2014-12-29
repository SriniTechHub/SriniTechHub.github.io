'use strict';

/**
 * @ngdoc function
 * @name idbasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the idbasApp
 */
angular.module('idbasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
