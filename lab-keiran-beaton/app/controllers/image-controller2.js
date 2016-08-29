'use strict';

module.exports = function(app){
  app.controller('ImageController2', function() {
    this.imageGallery = require('../data/images1.js');
    this.thumbnail = false;
  });
};
