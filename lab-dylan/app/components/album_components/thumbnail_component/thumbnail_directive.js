'use strict';

module.exports = function(app) {
  app.directive('dsThumbnailDirective', function() {
    return {
      template: require('./thumbnail_component.html'),
      controller: 'AlbumController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        description: '@',
        url: '@',
        name: '@',
        albumId: '@',
        id: '@'
      }
    };
  });
};
