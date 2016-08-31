'use strict';

module.exports = function(demoApp){
  demoApp.controller('GalleryController2', function() {
    this.imageGallery = require('../data/images2.js');
    this.thumbnail = false;
  });
};
