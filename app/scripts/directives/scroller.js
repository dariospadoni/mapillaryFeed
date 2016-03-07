'use strict';

/**
 * @ngdoc directive
 * @name mapillaryApp.directive:scroller
 * @description
 * # scroller
 */
angular.module('mapillaryApp')
  .directive('scroller', function ($timeout) {
    return {
      restrict: 'AC',
      scope: { scrollX: '=' },
      controller: function($scope, $element) {
        $scope.$watch('scrollX', function() {
          $timeout(function() {
            $element.animate({ scrollLeft: $scope.scrollX }, 800);
          }, 1);
        });
      }
    };
  });
