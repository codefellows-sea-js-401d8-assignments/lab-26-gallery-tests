'use strict';

module.exports = function(app) {
  app.controller('AlbumController', ['$routeParams',
    '$rootScope',
    '$location',
    function($routeParams, $rootScope, $location) {
      this.albums = require('../data/albums.js');
      this.list = true;
      this.thumbnail = false;
      let galleryId = Number.parseInt($routeParams.galleryId);
      this.whichAlbum = galleryId;
      let fullId = Number.parseInt($routeParams.fullId);
      this.whichPic = fullId;

      // Functions

      this.showcase = function() {
        this.list = !this.list;
        this.thumbnail = !this.thumbnail;
      };

      // Album Id +++++++++++++++++++++++++++++++++

      this.albumId = function(id) {
        if (isNaN(id)) return false;
        if (!isFinite(id)) return false;
        if (id < 0) return false;
        if (typeof(this.albums[id]) === 'undefined') return false;
        return true;
      };

      this.findAlbumId = function() {
        if (!this.albumId(galleryId)) {
          $location.path('/error');
        }
        this.currentAlbum = this.albums[galleryId];
      };

      // Pic Id +++++++++++++++++++++++++++++++++++

      this.picId = function(id) {
        if (isNaN(id)) return false;
        if (!isFinite(id)) return false;
        if (id < 0) return false;
        if (typeof(this.albums[this.whichAlbum].pics[id]) === 'undefined') return false;
        return true;
      };

      this.findPicId = function() {
        if (!this.picId(fullId)) {
          $location.path('/error');
        }
        this.currentPic = this.albums[this.whichAlbum].pics[fullId];
      };
    }
  ]);
};
