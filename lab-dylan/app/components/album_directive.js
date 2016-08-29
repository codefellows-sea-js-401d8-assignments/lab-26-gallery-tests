'use strict';

module.exports = function(app) {
  app.directive('dsAlbumDirective', function() {
    return {
      controller: 'AlbumController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: require('./album_component.html'),
      scope: {
        name: '@',
        url: '@',
        description: '@',
        albumId: '@',
        id: '@'
      }
    };
  });
};
