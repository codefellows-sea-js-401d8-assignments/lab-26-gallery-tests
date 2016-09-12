'use strict';

module.exports = function(app){
  app.directive('esFullsizeDirective', function() {
    return {
      controller: 'ImageController',
      controllerAs: 'ctrl',
      restrict: 'EAC',
      template: require('./fullsize-template.html'),
      bindToController: true,
      scope: {
        id: '@',
        title: '@',
        description: '@',
        images: '@'
      }
    };
  });
};
