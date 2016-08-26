'use strict';

module.exports = function(app) {
  app.directive('kbPaulImage', function() {
    return {
      template: require('./paul-image-directive.html'),
      controller: 'PaulImageController',
      controllerAs: 'pic',
      bindToController: true,
      require: '^kbPaulGallery',
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
