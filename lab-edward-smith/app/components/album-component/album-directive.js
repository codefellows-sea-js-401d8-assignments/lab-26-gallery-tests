'use strict';

module.exports = function(app){
  app.directive('esAlbumDirective', function() {
    return {
      restrict: 'EAC',
      controller: 'ImageController',
      template: require('./album-template.html'),
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        albums: '@'
      }
    };
  });
};
