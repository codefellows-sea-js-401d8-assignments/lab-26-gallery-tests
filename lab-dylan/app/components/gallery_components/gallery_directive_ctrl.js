'use strict';

module.exports = function(app) {
  app.controller('GalleryComponentController', function() {
    this.toggle = function() {
      if (this.toggleText === 'Grid') {
        this.toggleText = 'Table';
        this.showThumbnails = true;
        this.showList = false;
      } else {
        this.toggleText = 'Grid';
        this.showThumbnails = false;
        this.showList = true;
      }
    };
  });
};
