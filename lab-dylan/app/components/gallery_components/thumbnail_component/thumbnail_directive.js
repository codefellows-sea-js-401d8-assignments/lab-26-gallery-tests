'use strict';

module.exports = function(app) {
  app.directive('dsThumbnail', function() {
    return {
      controller: 'ThumbnailController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: require('./thumbnail_component.html'),
      require: '^dsGallery',
      scope: {
        album: '=',
        albums: '=',
        // description: '@',
        // url: '@',
        // name: '@',
        // albumId: '@',
        // id: '@'
      },
      link: function($scope, $elem, $attr, $controller) {
        $scope.ctrl.toggle = $controller.toggle;
      }
    };
  });
};
