'use strict';

module.exports = function(app) {
  app.directive('dsFullsizeDirective', function() {
    return {
      template: require('./fullsize_component.html'),
      controller: 'GalleryController',
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
