'use strict';

module.exports = function(app) {
  app.directive('pixHomeDirective', function() {
    return {
      template: require('./home-template.html'),
      controller: 'HomeController',
      controllerAs: 'hc',
      bindToController: true,
      scope: {
        albums: '='
      }
    };
  });
};
