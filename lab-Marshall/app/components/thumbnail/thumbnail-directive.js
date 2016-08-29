'use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmThumbnailDirective', function(){
    return {
      template: require('./thumbnail.html'),
      controller: 'ThumbnailController',
      controllerAs: 'tc',
      bindToController: true,
      scope: {
        images: '='
      }
    };
  });
};
