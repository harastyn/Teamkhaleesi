'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.calculateTip = function() {
    alert();
  }
  
  $scope.num1 = "";
  
  $scope.totalPrice = 0;
  
  $scope.$watch('num1', function() {
    $scope.totalPrice = parseInt($scope.num1) + $scope.num1 * $scope.percent;
  
    console.log('num1 changed');
  });

  $scope.$watch('percent', function() {
    $scope.totalPrice = parseInt($scope.num1) + $scope.num1 * $scope.percent;
  
    console.log('percent changed');
  });
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
