'use strict';

module.exports = function(app){
  app.directive('esThumbnailDirective', function() {
    return {
      restrict: 'EAC',
      controller: 'ImageController',
      template: require('./thumbnail-template.html'),
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        id: '@',
        title: '@',
        description: '@',
        images: '@'
      }
    };
  });
};
