'use strict';

module.exports = function(app) {
  app.directive('dsFullsize', function() {
    return {
      template: require('./fullsize_component.html'),
      controller: 'FullsizeController',
      controllerAs: 'ctrl',
      bindToController: true,
      require: '^dsGallery',
      scope: {
        album: '=',
        albumId: '@',
        Id: '@'
      }
    };
  });
};
