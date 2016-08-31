'use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmGalleryImageDirective', function(){
    return {
      template: require('./image.html'),
      controller: 'GalleryImageController',
      controllerAs: 'gic',
      bindToController: true,
      require: '^mmmGalleryButtonDirective',
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
