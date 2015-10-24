 var app = angular.module('singup', ['ui.bootstrap']);
 app.controller('signupController', ['$scope', '$uibModal', '$log', function($scope, $uibModal, $log) {
     $scope.interests = ['check 1', 'check 2', 'check 3', 'check 4'];
     $scope.selection = [];
     $scope.animationsEnabled = true;
     $scope.isSuccess = false;
     $scope.toggleSelection = function toggleSelection(checkedState, item) {
         var idx = $scope.selection.indexOf(item);
         if (idx === -1) {
             $scope.selection.push(item);
         } else {
             $scope.selection.splice(idx, 1);
         }
     };


     $scope.showModal = false;
     $scope.clickedSubmit = function() {
         var name = $scope.name;
         var email = $scope.email;

         var phone = $scope.phone;
         var password = $scope.password;
         var confirmPassword = $scope.confirmPassword;
         var gender = $scope.inputGenderOptions;
         $scope.nameInput = !$scope.name;
         $scope.emailInput = !$scope.email;
         $scope.phoneInput = !$scope.phone;
         $scope.passwordInput = !$scope.password;
         $scope.genderInput = !$scope.inputGenderOptions;

         if ($scope.selection.length === 0) {
             $scope.checkboxInput = true;
         } else {
             $scope.checkboxInput = false;
         }

         if (name && email && phone && password && gender && $scope.selection.length) {
             $scope.isSuccess = true;
             $scope.isError = false;
         } else {
             $scope.isSuccess = false;
             $scope.isError = true;
         }
         if ($scope.isSuccess) {
             if (($scope.password) && ($scope.password === $scope.confirmPassword)) {
                 $scope.confirmPasswordInput = false;
                 $scope.toggleModal();
             } else {
                 $scope.confirmPasswordInput = true;
                 $scope.isSuccess = false;
                 $scope.isError = true;
             }
         }


     };
     $scope.toggleModal = function() {
         $scope.showModal = !$scope.showModal;
     };

 }]);

 app.directive('modal', function() {
     return {
         template: '<div class="modal fade">' +
             '<div class="modal-dialog">' +
             '<div class="modal-content">' +
             '<div class="modal-header">' +
             '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
             '<h4 class="modal-title">{{ title }}</h4>' +
             '</div>' +
             '<div class="modal-body" ng-transclude></div>' +
             '</div>' +
             '</div>' +
             '</div>',
         restrict: 'E',
         transclude: true,
         replace: true,
         scope: true,
         link: function postLink(scope, element, attrs) {
             scope.title = attrs.title;

             scope.$watch(attrs.visible, function(value) {
                 if (value == true)
                     $(element).modal('show');
                 else
                     $(element).modal('hide');
             });

             $(element).on('shown.bs.modal', function() {
                 scope.$apply(function() {
                     scope.$parent[attrs.visible] = true;
                 });
             });

             $(element).on('hidden.bs.modal', function() {
                 scope.$apply(function() {
                     scope.$parent[attrs.visible] = false;
                 });
             });
         }
     };
 });
