'use strict';

angular.module('mapillaryApp')
  .directive('mecommentedonimage', function () {
    return {
      templateUrl: 'views/directives/mecommentedonimage.html',
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      }
    };
  });
