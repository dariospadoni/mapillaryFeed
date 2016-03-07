'use strict';

/**
 * @ngdoc service
 * @name mapillaryApp.users
 * @description
 * # users
 * Service in the mapillaryApp.
 */
angular.module('mapillaryApp')
  .service('users', function () {

    var hardCodedUserData = [
      {
        username: 'gyllen',
        picture: 'https://d4vkkeqw582u.cloudfront.net/52d86ee8b0ff7e05f79e6fcc/profile.png'
      },
      {
        username: 'adrianojbr',
        picture: 'https://d4vkkeqw582u.cloudfront.net/fb796afbb5ca46d4201db7f1/profile.png'
      },
      {
        username: 'mishari',
        picture: 'http://www.mapillary.com/img/fake-avatar.png'
      },
      {
        username: 'jonahrf',
        picture: 'http://www.mapillary.com/img/fake-avatar.png'
      },
      {
        username: 'enricofer',
        picture: 'https://d4vkkeqw582u.cloudfront.net/e18ffc7e186deaf1f15791f9/profile.png'
      },
      {
        username: 'gdsynat',
        picture: 'https://d4vkkeqw582u.cloudfront.net/12ef51d1e08e72a424059cbd/profile.png'
      },
      {
        username: 'joostjakob',
        picture: 'https://d4vkkeqw582u.cloudfront.net/666ddeac20f49ad6fda205d3/profile.png'
      },
      {
        username: 'yanapong',
        picture: 'https://d4vkkeqw582u.cloudfront.net/8d2b2afd5d9cd4382a0150cc/profile.png'
      },
       {
        username: 'z-yurets',
        picture: 'https://d4vkkeqw582u.cloudfront.net/6e25d655bb9e338c2614d29d/profile.png'
      }
    ];

    return {
      loadUsers: function() { return _.orderBy(hardCodedUserData, 'username'); }
    };

  });
