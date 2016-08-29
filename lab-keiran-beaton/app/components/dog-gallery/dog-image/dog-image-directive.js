'use strict';

module.exports = function(app) {
  app.directive('kbDogImage', function() {
    return {
      template: require('./dog-image-directive.html'),
      controller: 'DogImageController',
      controllerAs: 'dic',
      bindToController: true,
      require: '^kbDogGallery',
      scope: {
        title: '=',
        url: '=',
        description: '=',
        id: '=',
        thumbnail: '='
      }
    };
  });
};
