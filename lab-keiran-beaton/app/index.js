'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const galleryApp = angular.module('galleryApp', [require('angular-route')]);

require('./controllers')(galleryApp);
require('./components')(galleryApp);

galleryApp.config(['$routeProvider', function($route) {
  $route
  .when('/home', {
    template: require('./html/home.html')
  })
  .when('/lance', {
    template: require('./html/lance.html'),
    controller: 'ImageController1',
    controllerAs: 'ic1'
  })
  .when('/paul', {
    template: require('./html/paul.html'),
    controller: 'ImageController2',
    controllerAs: 'ic2'
  })
  .when('/dog', {
    template: require('./html/dog.html'),
    controller: 'ImageController3',
    controllerAs: 'ic3'
  })
  .when('/full/:id', {
    template: require('./html/full.html'),
    controller: 'FullController',
    controllerAs: 'fc'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);
