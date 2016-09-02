'use strict';

module.exports = function(app) {
  app.directive('dsGallery', function() {
    return {
      controller: 'GalleryController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: require('./gallery_component.html'),
      scope: {
        toggleText: '=',
        albums: '='
        // url: '@',
        // description: '@',
        // albumId: '@',
        // id: '@'
      }
    };
  });
};
