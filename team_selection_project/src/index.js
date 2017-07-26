import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'expose?$!expose?jQuery!jquery';
import 'ui-select';
import "bootstrap-less";
import './styles.less';


var app = angular.module('myModule', [uiRouter,'ui.select']);
var homeTplUrl = require('!ngtemplate?requireAngular!html!./home.html');

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
            url: '/',
            templateUrl: homeTplUrl
        });
        $locationProvider.html5Mode(true);
});