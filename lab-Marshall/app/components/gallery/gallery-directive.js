'use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmGalleryDirective', function(){
    return {
      template: require('./gallery.html'),
      controller: 'GalleryButtonController',
      controllerAs: 'gbc',
      bindToController: true,
      scope: {
        title: '@',
        imageGallery: '=',
        description: '@',
        thumbnail: '='
      }
    };
  });
};
