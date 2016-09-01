'use strict';

module.exports = function(app){
  app.directive('fullComponent', function() {
    return {
      restrict: 'EA',
      template: require('./full.html'),
      controller: 'AlbumController',
      controllerAs: 'album',
      bindToController: true,
      scope: {
        id: '@',
        name: '@',
        thumb: '@',
        pics: '@',
        description: '@'
      }
    };
  });
};
