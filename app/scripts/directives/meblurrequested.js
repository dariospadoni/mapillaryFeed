'use strict';

angular.module('mapillaryApp')
  .directive('meblurrequested', function () {
    return {
      templateUrl: 'views/directives/meblurrequested.html',
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      }
    };
  });
