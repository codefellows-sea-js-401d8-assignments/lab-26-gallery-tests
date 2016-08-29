'use strict';

module.exports = function(app) {
  app.directive('kbPaulGallery', function() {
    return {
      restrict: 'EAC',
      controller: 'PaulController',
      controllerAs: 'pc',
      bindToController: true,
      template: require('./paul-directive.html'),
      scope: {
        title: '@',
        imageGallery: '=',
        description: '@',
        thumbnail: '='
      }
    };
  });
};
