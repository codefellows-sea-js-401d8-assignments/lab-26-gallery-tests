'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var galleryApp = angular.module('galleryApp', [angular_route]);

galleryApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/album/:galleryId', {
      template: require('./html/album-view.html'),
      controller: 'AlbumController',
      controllerAs: 'album'
    })
    .when('/album/:galleryId/full/:fullId', {
      template: require('./html/full-view.html'),
      controller: 'AlbumController',
      controllerAs: 'album'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);


// controllers
require('./controllers/controller-index.js')(galleryApp);

// directives
require('./components/components-index.js')(galleryApp);
