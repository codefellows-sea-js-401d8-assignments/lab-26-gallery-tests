'use strict';

module.exports = function(app){
  app.controller('ImageController3', function() {
    this.imageGallery = require('../data/images2.js');
    this.thumbnail = false;
  });
};
