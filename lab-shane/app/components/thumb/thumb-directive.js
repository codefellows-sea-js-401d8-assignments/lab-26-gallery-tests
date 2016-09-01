'use strict';

module.exports = function(app){
  app.directive('thumb', function() {
    return {
      restrict: 'EA',
      template: require('./thumb.html'),
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
