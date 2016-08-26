'use strict';

module.exports = function(app){
  app.controller('ImageController2', function() {
    this.imageGallery = require('../data/images1.js');
    this.title = 'That\'s why they brought me here';
    this.description = 'A Gallery of images of Paul Pierce';
    this.thumbnail = true;
  });
};
