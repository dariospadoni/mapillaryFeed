'use strict';

/**
 * @ngdoc service
 * @name mapillaryApp.feedAPI
 * @description
 * # feedAPI
 * Service in the mapillaryApp.
 */
angular.module('mapillaryApp')
  .service('feedAPI', function ($http, feedAPIURL, clientID) {

    function loadGlobalFeed (eventTypes, sort, limit) {
      var globalFeedBaseUrl = sprintf(feedAPIURL, 'search', clientID);
      var queryString = _.map(eventTypes, function(eventType) { return '&event_types=' + eventType; }).join('');
      queryString += '&sort_by=' + (sort || 'updated_at');
      queryString += '&limit=' + (limit || 20);
      return $http.get(globalFeedBaseUrl + queryString);
    }

    function loadUserFeed (username, limit, page) {
      var userFeedUrl = sprintf(feedAPIURL, 'u/' + username, clientID);
      var queryString = '&limit=' + (limit || 20);
      queryString += '&page=' + (page|| 0);
      return $http.get(userFeedUrl + queryString);
    }

    return {
      loadGlobalFeed: loadGlobalFeed,
      loadUserFeed: loadUserFeed
    };

  });
