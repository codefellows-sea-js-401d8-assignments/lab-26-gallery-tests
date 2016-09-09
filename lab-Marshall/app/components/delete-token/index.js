'use strict';

module.exports = function(demoApp){
  demoApp.component('deleteToken', {
    controller: 'AuthController',
    template: require('./delete-token.html')
  });
};
