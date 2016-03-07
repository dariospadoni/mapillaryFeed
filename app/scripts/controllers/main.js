'use strict';

/**
 * @ngdoc function
 * @name mapillaryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapillaryApp
 */
angular.module('mapillaryApp')
  .controller('MainCtrl', function ($localStorage) {
    var vm = this;
    vm.xScroll = 0;

    vm.$storage = $localStorage.$default({
      columns: [{ type: 'users', title: 'Users', user: null}, { type: 'globalActivity', title: 'Global activity', user: null}]
    });

    vm.onSelectUser = function(user) {
      //avoid having multiple columns for the same user
      var columnIndex = _.findIndex(vm.$storage.columns, { user: user.username});
      if (columnIndex === -1) {
        vm.$storage.columns.push({ type: 'userFeed', title: user.username + ' activity', user: user.username });
        vm.xScroll = 300 * vm.$storage.columns.length;
      }
      //scroll to user column
      else {
        var pos = _.indexOf(vm.$storage.columns, { user: user.username });
        vm.xScroll = 300 * columnIndex;
      }
    };

    vm.removeColumn = function(user) {
      _.remove(vm.$storage.columns, { user: user });
      vm.userFeedColumns = [];
    };

  });
