'use strict';

module.exports = function(app) {
  app.directive('dsThumbnail', function() {
    return {
      controller: 'GalleryController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: require('./thumbnail_component.html'),
      require: '^dsGallery',
      scope: {
        album: '='
        // description: '@',
        // url: '@',
        // name: '@',
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
