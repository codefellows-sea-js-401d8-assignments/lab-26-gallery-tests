require('!!file?name=[name].[ext]!./html/index.html');

const angular = require('angular');
const demoApp = angular.module('demoApp', [require('angular-route')]);

require('./controllers')(demoApp);
require('./components')(demoApp);

demoApp.config(['$routeProvider', function($route) {
  $route.when('/home', {
    template: require('./html/home.html'),
    controller: 'GalleryController',
    controllerAs: 'dc'
  })
  .when('/images/:albumId/fullsize/:id', {
    template: require('./html/home.html'),
    controller: 'GalleryController',
    controllerAs: 'ctrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);
