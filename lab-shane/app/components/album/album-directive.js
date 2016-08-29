'use strict';

module.exports = function(app){
  app.directive('albumShowcase', function() {
    return {
      restrict: 'EA',
      template: require('./album-showcase.html'),
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
