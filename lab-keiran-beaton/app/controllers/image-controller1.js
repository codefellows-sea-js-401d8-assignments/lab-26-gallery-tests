'use strict';

module.exports = function(app){
  app.controller('ImageController1', function() {
    this.imageGallery = require('../data/images4.js');
    this.title = 'Born Ready';
    this.description = 'A Gallery of images of Lance Stephenson';
    this.thumbnail = true;
  });
};
