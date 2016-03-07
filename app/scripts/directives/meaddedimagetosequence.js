'use strict';

/**
 * @ngdoc directive
 * @name mapillaryApp.directive:meaddedimagetosequence
 * @description
 * # meaddedimagetosequence
 */
angular.module('mapillaryApp')
  .directive('meaddedimagetosequence', function () {
    return {
      templateUrl: 'views/directives/meaddedimagetosequence.html',
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      }
    };
  });
