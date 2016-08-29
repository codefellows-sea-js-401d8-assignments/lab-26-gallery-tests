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
      controller: 'ImgController',
      controllerAs: 'img'
    })
    .when('/thumbnail', {
      template: require('./html/thumbnail.html'),
      controller: 'ImgController',
      controllerAs: 'img'
    })
    .when('/fullsize/:id', {
      template: require('./html/fullsize.html'),
      controller: 'ImgController',
      controllerAs: 'img'
    })
    .when('/fulldisplay', {
      template: require('./html/fullDisplay.html'),
      controller: 'ImgController',
      controllerAs: 'img'
    })
    .otherwise({
      redirecTo: '/'
    });
}]);
