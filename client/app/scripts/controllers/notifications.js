'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NotificationsCtrl
 * @description
 * # NotificationsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NotificationsCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
