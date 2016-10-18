// (function () {
// 'use strict';
//
// angular.module('LunchCheck', [])
// .controller('LunchCheckController', LunchCheckController);
// LunchCheckController.$inject = ['$scope'];
//
// function LunchCheckController($scope) {
//   $scope.message = "";
//   $scope.lunchMenu = "";
//   $scope.color = "";
//   $scope.borderColor = "";
//   $scope.checkLunched = function () {
//      var lunchItems = $scope.lunchMenu.split(",");
//      lunchItems = lunchItems.filter(v=>v != '');
//      $scope.message = "Please enter data first";
//      $scope.borderColor = $scope.color= "red";
//      if(lunchItems.length<=3 && lunchItems.length>0) {
//         $scope.message = "Enjoy!";
//         $scope.borderColor = $scope.color ="green";
//      }
//      if(lunchItems.length>3)
//         $scope.message = "Too Much!";
//   };
// }
// })();

!function(){"use strict";function a(a){a.message="",a.lunchMenu="",a.color="",a.borderColor="",a.checkLunched=function(){var b=a.lunchMenu.split(",");b=b.filter((a=>""!=a)),a.message="Please enter data first",a.borderColor=a.color="red",b.length<=3&&b.length>0&&(a.message="Enjoy!",a.borderColor=a.color="green"),b.length>3&&(a.message="Too Much!")}}angular.module("LunchCheck",[]).controller("LunchCheckController",a),a.$inject=["$scope"]}();
