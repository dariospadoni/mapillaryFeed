'use strict';

angular.module('mapillaryApp')
  .service('users', function () {

    //hardcoded list of username + picture
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
        username: 'allen',
        picture: 'https://d4vkkeqw582u.cloudfront.net/bea1abbd1ff4d557874ba5e8/profile.png'
      },
      {
        username: 'adam2',
        picture: 'http://www.mapillary.com/img/fake-avatar.png'
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
