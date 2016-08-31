'use strict';

module.exports = function(demoApp){
  demoApp.controller('GalleryController3', function() {
    this.imageGallery = require('../data/images3.js');
    this.thumbnail = false;
  });
};
