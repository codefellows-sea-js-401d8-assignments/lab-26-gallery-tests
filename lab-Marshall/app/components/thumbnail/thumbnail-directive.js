'use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmThumbnailDirective', function(){
    return {
      template: require('./thumbnail.html'),
      controller: 'ThumbDirectiveController',
      controllerAs: 'tdc',
      bindToController: true,
      scope: {
        images: '='
      }
    };
  });
};
