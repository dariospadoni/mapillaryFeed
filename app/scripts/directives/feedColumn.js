'use strict';

/**
 * @ngdoc directive
 * @name mapillaryApp.directive:feedColumn
 * @description
 * # feedColumn
 */
angular.module('mapillaryApp')
  .directive('feedColumn', function () {
    return {
      templateUrl: 'views/directives/feedColumn.html',
      restrict: 'E',
      replace: true,
      scope: {
        title: '@',
        user: '@',
        dismiss: '=', // true|false to display close icon
        removeColumn: '&'
      },
      controller: function($scope, feedAPI) {
        $scope.feedData = [];
        $scope.orderBy = 'updated_at';

        $scope.reverseSort = function() {
          $scope.orderBy = $scope.orderBy === 'updated_at' ? '-updated_at' : 'updated_at';
        };

        var promise = null;
        if ($scope.user) {
          promise = feedAPI.loadUserFeed($scope.user);
        } else {
          promise = feedAPI.loadGlobalFeed(['meaddedimagetosequence', 'mecommentedonimage', 'meblurrequested'], 'updated_at', 10);
        }
        promise.then(function(resp){
          $scope.data = resp.data.feed;
        });
      }
    };
  });
