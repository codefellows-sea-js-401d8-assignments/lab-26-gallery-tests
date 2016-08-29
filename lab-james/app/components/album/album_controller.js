'use strict';

module.exports = function(app) {
  app.controller('AlbumController',['$routeParams', function($routeParams) {
    let previousView;
    if (this.id !== $routeParams.album_id) return false;
    if(this.id === $routeParams.album_id) this.album.showAlbum = true;

    this.showThumbnail = function() {
      this.album.viewThumbnail = true;
      this.album.viewList = false;
      this.album.fullsize = false;
    };

    this.showList = function() {
      this.album.viewThumbnail = false;
      this.album.viewList = true;
      this.album.fullsize = false;
    };

    this.showFullsize = function(imageId) {
      if (this.album.viewThumbnail) previousView = 'thumbnail';
      if (this.album.viewList) previousView = 'list';
      this.album.viewThumbnail = false;
      this.album.viewList = false;
      this.album.fullsize = true;
      this.album.images[imageId - 1].showFullsize = true;
    };

    this.goBack = function(imageId) {
      if (previousView === 'thumbnail') this.album.viewThumbnail = true;
      if (previousView === 'list') this.album.viewList = true;
      this.album.showFullsize = false;
      this.album.images[imageId - 1].showFullsize = false;
    };
  }]);
};
