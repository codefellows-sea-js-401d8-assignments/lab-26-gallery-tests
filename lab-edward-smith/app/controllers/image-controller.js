'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$rootScope', '$routeParams', '$location', 'auth', function($rootScope, $rp, $location, auth){
    this.images = [require('../data/bunnies'), require('../data/boxers'), require('../data/terriers')];

    let location = $rp.id;

    this.list = false;

    this.getAlbum = function() {
      this.album = this.images[location];
    };


    this.getImage = function() {
      this.image = this.images[location].images[$rp.imageId-1];
    };

    this.toggle = function() {
      if (this.list) {
        return this.list = false;
      }
      this.list = true;
    };

    this.getUser = auth.getUser.bind(auth);
    this.logOut = auth.logOut.bind(auth);
    this.currentUser = auth.currentUser;

  }]);
};
