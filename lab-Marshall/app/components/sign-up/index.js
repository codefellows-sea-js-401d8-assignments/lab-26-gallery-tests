'use strict';

module.exports = (demoApp) => {
  demoApp.component('signUp', {
    controller: 'AuthController',
    template: require('./sign-up.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
