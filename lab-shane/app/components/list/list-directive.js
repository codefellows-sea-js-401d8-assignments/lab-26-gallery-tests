'use strict';

module.exports = function(app){
  app.directive('list', function() {
    return {
      restrict: 'EA',
      template: require('./list.html'),
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
