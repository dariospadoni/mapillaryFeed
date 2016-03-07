'use strict';

angular
  .module('mapillaryApp', [
    'ngRoute',
    'ngStorage',
    'ngDragDrop',
    'yaru22.angular-timeago'
  ])

  .constant('clientID', 'NVNQUnduTmlGOEY0SnVNSE9PVXZZZzpkMWIyZDU2MzYzNTJmM2M5')

  .constant('feedAPIURL', 'https://a.mapillary.com/v2/%s/feed?client_id=%s')

  .config(function ($routeProvider, $localStorageProvider) {

    $localStorageProvider.setKeyPrefix('mapillaryApp');

    //only one route
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
