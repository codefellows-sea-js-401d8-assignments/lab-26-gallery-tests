'use strict';

module.exports = function(demoApp){
  demoApp.controller('GalleryController', function() {
    this.imageGallery = require('../data/images.js');
    this.thumbnail = false;
  });
};
