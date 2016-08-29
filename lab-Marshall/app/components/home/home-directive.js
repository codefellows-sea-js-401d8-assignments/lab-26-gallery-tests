'use strict';

module.exports = function(app) {
  app.directive('mmmHomeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./home.html'),
      controller: 'ImgController',
      controllerAs: 'hc',
      bindToController: true,
      scope: {
        title: '@',
        description: '=',
        url: '='
      }
    };
  });
};
