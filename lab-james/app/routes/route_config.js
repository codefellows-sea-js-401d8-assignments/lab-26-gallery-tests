'use strict';

module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('../html/home.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .when('/album/:album_id', {
      template: require('../html/album.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .otherwise({
      redirectTo: '/'
    });
};
