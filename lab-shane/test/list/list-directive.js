'use strict';

module.exports = function(app){
  app.directive('listTest', function() {
    return {
      restrict: 'EA',
      template: require('./list-directive-test.html'),
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
