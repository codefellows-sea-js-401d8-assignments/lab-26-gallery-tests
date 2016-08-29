'use strict';

module.exports = function(app) {
  app.directive('pixAlbumDirective', function() {
    return {
      template: require('./album-template.html'),
      controller: 'AlbumController',
      controllerAs: 'ac',
      bindToController: true,
      scope: {
        id: '@',
        album: '='
      }
    };
  });
};
