'use strict';

module.exports = function(app) {
  app.directive('dsText', function() {
    return {
      template: require('./text_component.html'),
      controller: 'TextController',
      controllerAs: 'ctrl',
      require: '^dsGallery',
      bindToController: true,
      scope: {
        album: '=',
        albums: '='
      },
      link: function($scope, $elem, $attr, $controller) {
        $scope.ctrl.toggle = $controller.toggle;
      }
    };
  });
};
