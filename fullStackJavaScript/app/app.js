angular.module('fullStackJavaScript', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('fullStackJavaScript').config(function ($stateProvider, $urlRouterProvider) {

    /* Add New States Above */

    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'res/commonTemplates/loginTemplate.html',
            controller: 'loginController'
        }).state('home', {
            url: '/home',
            templateUrl: 'res/commonTemplates/homeTemplate.html',
            controller: 'homeController'
    });
});

angular.module('fullStackJavaScript').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
angular.module('fullStackJavaScript').controller('appController', function ($scope,$rootScope) {
     console.log('welcome to app controller');
});

angular.module('fullStackJavaScript').factory('loginService', function () {
    var loginService = {};


    loginService.setLogin= function (loginPermission) {

        loginService.login = loginPermission;
      };
    loginService.getLogin= function () {
           return loginService.login;
       };

    return loginService;
});
angular.module('fullStackJavaScript').controller('loginController', function ($scope, $state, loginService,$http) {
    $scope.login = function () {
        $scope.showLoader = true;
        $scope.invalid = false;
        $http({
            method:'GET',
            url:'https://api.mlab.com/api/1/databases/full_stack_developer_javascript/collections/users?apiKey=cg1G5GCiREqPytVeVwjldvYAPWFJRv6K'
        }).then(function (result) {
            $scope.showLoader = false;

                for(var i = 0; i < result.data.length; i++) {
                    if((result.data[i]['username'] === $scope.username) && (result.data[i]['password'] === $scope.userpassword)) {
                        $state.go('home');
                        loginService.setLogin('login');
                        console.log('Valid Credentials');
                        $scope.invalid = false;
                        return;
                    }else{
                        $scope.invalid = true;
                        return;
                    }
                }
            });

    };
});
angular.module('fullStackJavaScript').controller('homeController', function ($scope,$state,loginService) {
    if(angular.isDefined(loginService.getLogin())){
        console.log('user logged in');
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];
    }else {
        $state.go('login');
    }
});

