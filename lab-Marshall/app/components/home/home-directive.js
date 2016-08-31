'use strict';

module.exports = function(demoApp) {
  demoApp.directive('mmmHomeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./home.html'),
      controller: 'HomeDirectiveController',
      controllerAs: 'hdc',
      bindToController: true,
      scope: {
        title: '@',
        description: '=',
        url: '='
      }
    };
  });
};
