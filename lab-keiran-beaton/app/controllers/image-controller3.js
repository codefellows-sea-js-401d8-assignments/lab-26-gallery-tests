'use strict';

module.exports = function(app){
  app.controller('ImageController3', function() {
    this.imageGallery = require('../data/images2.js');
    this.title = 'Very Good Dogs';
    this.description = 'A Gallery of images of Dogs';
    this.thumbnail = true;
  });
};
