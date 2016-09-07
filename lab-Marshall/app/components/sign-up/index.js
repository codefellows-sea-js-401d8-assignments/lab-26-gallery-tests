'use strict';

module.exports = (demoApp) => {
  demoApp.component('signIn', {
    controller: 'AuthController',
    template: require('./sign-up.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
