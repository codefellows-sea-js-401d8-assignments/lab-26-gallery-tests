'use strict';

module.exports = function(app) {
  app.directive('dsFullsizeDirective', function() {
    return {
      template: require('./fullsize_component.html'),
      controller: 'AlbumController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        description: '@',
        url: '@',
        name: '@',
        albumId: '=',
        id: '@'
      }
    };
  });
};
