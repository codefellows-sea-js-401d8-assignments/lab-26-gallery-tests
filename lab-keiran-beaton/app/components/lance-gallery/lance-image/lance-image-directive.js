'use strict';

module.exports = function(app) {
  app.directive('kbLanceImage', function() {
    return {
      template: require('./lance-image-directive.html'),
      controller: 'LanceImageController',
      controllerAs: 'lic',
      bindToController: true,
      require: '^kbLanceGallery',
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
