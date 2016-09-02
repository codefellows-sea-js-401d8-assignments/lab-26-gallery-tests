'use strict';

module.exports = function(app) {
  app.directive('dsFullsize', function() {
    return {
      template: require('./fullsize_component.html'),
      controller: 'GalleryController',
      controllerAs: 'ctrl',
      bindToController: true,
      require: '^dsGallery',
      scope: {
        // album: '@',
        // albumId: '@',
        albums: '='
      },
      link: function($scope, $elem, $attr, $controller) {
        $scope.ctrl.toggle = $controller.toggle;
        $scope.ctrl.toggleFullsize = $controller.toggleFullsize;
      }
    };
  });
};
