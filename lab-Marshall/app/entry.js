'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const demoApp = angular.module('demoApp', [require('angular-route')]);

require('./controllers')(demoApp);
require('./components')(demoApp);

demoApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/thumbnail', {
      template: require('./html/thumbnail.html'),
      controller: 'ThumbController',
      controllerAs: 'tc'
    })
    .when('/gallery', {
      template: require('./html/gallery.html'),
      controller: 'GalleryController',
      controllerAs: 'gc'
    })
    // .when('/gallery2', {
    //   template: require('./html/gallery.html'),
    //   controller: 'ImgControllerTwo',
    //   controllerAs: 'img'
    // })
    // .when('/gallery3', {
    //   template: require('./html/gallery.html'),
    //   controller: 'ImgControllerThree',
    //   controllerAs: 'img'
    // })
    .when('/fullsize/:id', {
      template: require('./html/fullsize.html'),
      controller: 'FullsizeController',
      controllerAs: 'fsc'
    })
    .when('/fulldisplay', {
      template: require('./html/fullDisplay.html'),
      controller: 'FullDisplayController',
      controllerAs: 'fdc'
    })
    .otherwise({
      redirecTo: '/'
    });
}]);
