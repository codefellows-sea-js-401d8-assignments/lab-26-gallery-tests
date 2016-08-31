'use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmFullsizeDirective', function(){
    return {
      template: require('./fullsize.html'),
      controller: 'FullsizeDirectiveController',
      controllerAs: 'fds',
      bindToController: true,
      scope: {
        title: '@',
        url: '@',
        id: '@',
        description: '@'
      }
    };
  });
};
