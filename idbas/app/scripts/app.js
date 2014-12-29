'use strict';

/**
 * @ngdoc overview
 * @name idbasApp
 * @description
 * # idbasApp
 *
 * Main module of the application.
 */
angular
  .module('idbasApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
