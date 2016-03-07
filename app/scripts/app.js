'use strict';

/**
 * @ngdoc overview
 * @name mapillaryApp
 * @description
 * # mapillaryApp
 *
 * Main module of the application.
 */
angular
  .module('mapillaryApp', [
    'ngRoute',
    'ngStorage',
    'ngDragDrop',
    'yaru22.angular-timeago'
  ])

  .constant('clientID', 'NVNQUnduTmlGOEY0SnVNSE9PVXZZZzpkMWIyZDU2MzYzNTJmM2M5')
  .constant('feedAPIURL', 'https://a.mapillary.com/v2/%s/feed?client_id=%s')

  .config(function ($routeProvider,$locationProvider,  $localStorageProvider) {
    $locationProvider.html5Mode(true);
    $localStorageProvider.setKeyPrefix('mapillaryApp');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
