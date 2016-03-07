'use strict';

/**
 * @ngdoc directive
 * @name mapillaryApp.directive:userColumn
 * @description
 * # userColumn
 */
angular.module('mapillaryApp')
  .directive('userColumn', function (users) {
    return {
      templateUrl: 'views/directives/userColumn.html',
      restrict: 'E',
      replace: true,
      scope: {
        title: '@',
        onSelectUser: '&'
      },
      controller: function($scope) {
        $scope.users = users.loadUsers();
      }
    };
  });
