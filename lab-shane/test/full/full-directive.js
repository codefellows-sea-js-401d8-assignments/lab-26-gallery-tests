'use strict';

module.exports = function(app){
  app.directive('fullComponentTest', function() {
    return {
      restrict: 'EA',
      template: require('./full-directive-test.html'),
      controller: 'AlbumController',
      controllerAs: 'album',
      bindToController: true,
      scope: {
        id: '@',
        name: '@',
        thumb: '@',
        pics: '@',
        description: '@'
      }
    };
  });
};
