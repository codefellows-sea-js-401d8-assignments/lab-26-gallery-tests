'use strict';

module.exports = function(app) {
  app.directive('dsGallery', function() {
    return {
      controller: 'GalleryController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: require('./gallery_component.html'),
      scope: {
        toggleText: '@',
        albums: '='
        // url: '@',
        // description: '@',
        // albumId: '@',
        // id: '@'
      },
      link: function($scope, $elem, $attr, $controller) {
        $scope.ctrl.toggle = $controller.toggle;
        $scope.ctrl.toggleFullsize = $controller.toggleFullsize;
      }
    };
  });
};
