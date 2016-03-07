'use strict';

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
      controller: function($scope, $localStorage) {
        $scope.users = users.loadUsers();
        $scope.columns = $localStorage.columns;

        //checks if user has his own column already and sets properties accordingly
        function refreshUserColumns() {
          //get current columns
          var userCols = _.map(_.filter($localStorage.columns, { type: 'userFeed'}), 'user');
          _.each($scope.users, function(user) {
            if (userCols.indexOf(user.username) !== -1) {
              user.hasColumn = true;
            } else {
              user.hasColumn = false;
            }
          });
        }
        refreshUserColumns();

        $scope.$watchCollection('columns', refreshUserColumns);
      }
    };
  });
