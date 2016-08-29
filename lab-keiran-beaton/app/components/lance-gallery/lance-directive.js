'use strict';

module.exports = function(app) {
  app.directive('kbLanceGallery', function() {
    return {
      restrict: 'EAC',
      controller: 'LanceController',
      controllerAs: 'lc',
      bindToController: true,
      template: require('./lance-directive.html'),
      scope: {
        title: '@',
        imageGallery: '=',
        description: '@',
        thumbnail: '='
      }
    };
  });
};
