'use strict';

module.exports = function(app){
  app.directive('thumbTest', function() {
    return {
      restrict: 'EA',
      template: require('./thumb-directive-test.html'),
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
