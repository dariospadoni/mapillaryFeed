'use strict';

/**
 * @ngdoc directive
 * @name mapillaryApp.directive:mecommentedonimage
 * @description
 * # mecommentedonimage
 */
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
