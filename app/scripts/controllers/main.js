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

    vm.$storage = $localStorage.$default({
      columns: [{ type: 'users', title: 'Users'}, { type: 'globalActivity', title: 'Global activity'}]
    });

    vm.onSelectUser = function(user) {
      console.log('Add column ' + user);
      //avoid having multiple columns for the same user
      if (!_.find(vm.$storage.columns, { user: user.username})) {
        vm.$storage.columns.push({ type: 'userFeed', title: user.username + ' activity', user: user.username });
      }
    };

    vm.removeColumn = function(user) {
      console.log('Remove column ' + user);
      _.remove(vm.$storage.columns, { user: user });
      vm.userFeedColumns = [];
    };

  });
