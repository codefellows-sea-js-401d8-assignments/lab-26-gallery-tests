'use strict';

module.exports = function(app) {
  app.directive('kbDogGallery', function() {
    return {
      restrict: 'EAC',
      controller: 'DogController',
      controllerAs: 'dc',
      bindToController: true,
      template: require('./dog-directive.html'),
      scope: {
        title: '@',
        imageGallery: '=',
        description: '@',
        thumbnail: '='
      }
    };
  });
};
