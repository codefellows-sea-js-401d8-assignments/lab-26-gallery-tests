'use strict';

module.exports = (demoApp) => {
  demoApp.component('logIn', {
    controller: 'AuthController',
    template: require('./log-in.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
