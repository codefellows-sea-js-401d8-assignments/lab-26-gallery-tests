'use strict';

module.exports = function(app) {
  app.controller('AlbumController', ['$routeParams',
    '$rootScope',
    '$location',
    function($routeParams, $rootScope, $location) {
      this.albums = require('../data/albums.js');
      this.list = true;
      this.thumbnail = false;
      this.galleryId = Number.parseInt($routeParams.galleryId);
      this.fullId = Number.parseInt($routeParams.fullId);

      // Album Id +++++++++++++++++++++++++++++++++

      this.albumId = function(id) {
        if (isNaN(id)) return false;
        if (!isFinite(id)) return false;
        if (id < 0) return false;
        if (typeof(this.albums[id]) === 'undefined') return false;
        return true;
      };

      this.findAlbumId = function() {
        if (!this.albumId(this.galleryId)) {
          $location.path('/error');
        }
        this.currentAlbum = this.albums[this.galleryId];
      };

      // Pic Id +++++++++++++++++++++++++++++++++++

      this.picId = function(id) {
        if (isNaN(id)) return false;
        if (!isFinite(id)) return false;
        if (id < 0) return false;
        if (typeof(this.albums[this.galleryId].pics[id]) === 'undefined') return false;
        return true;
      };

      this.findPicId = function() {
        if (!this.picId(this.fullId)) {
          $location.path('/error');
        }
        this.currentPic = this.albums[this.galleryId].pics[this.fullId];
      };
    }
  ]);
};
