'use strict';

module.exports = function(demoApp) {
  demoApp.controller('AuthController', ['$http', '$location', '$window', 'auth', function($http, $location, $window, auth) {
    this.signup = function(user) {
      if (auth.getToken({noRedirect: true})) $location.path('/signup');

      $http.post(this.baseUrl + '/api/signup', user)
        .then((res) => {
          auth.setToken(res.data.token);
          $http.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
          $location.path('/fulldisplay');
        }, (res, err) => {
          alert('You already have an account, please sign in!');
          $location.path('/login');
          console.log(err);
        });
    };

    this.signin = function(user) {
      if (auth.getToken({noRedirect: true})) $location.path('/signin');

      $http.get(this.baseUrl + '/api/login', {
        headers: {
          'Authorization': 'Basic ' + $window.btoa(user.email + ':' + user.password)
        }
      })
        .then((res) => {
          auth.setToken(res.data.token);
          $location.path('/fulldisplay');
        }, (err) => {
          alert('Wrong user and pass!');
          console.log(err);
        });
    };

    this.getUser = auth.getUser.bind(auth);
    this.deleteToken = auth.deleteToken.bind(auth);
    this.currentUser = auth.currentUser;
  }]);
};
