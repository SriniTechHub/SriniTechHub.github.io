'use strict';

/**
 * @ngdoc function
 * @name idbasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the idbasApp
 */
angular.module('idbasApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
