angular.module('fullStackJavaScript').filter('sampleFilter', function() {
    return function(input,arg) {
        return 'output';
    };
});
