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
        dismiss: '=',
        removeColumn: '&'
      },
      controller: function($scope, feedAPI) {
        $scope.feedData = [];

        var promise = null;
        if ($scope.user) {
          promise = feedAPI.loadUserFeed($scope.user);
        } else {
          promise = feedAPI.loadGlobalFeed(['meaddedimagetosequence', 'mecommentedonimage', 'meblurrequested'], 'updated_at', 10);
        }
        promise.then(function(resp){
          $scope.data = resp.data.feed;
          console.log($scope.data);
        });
      }
    };
  });
