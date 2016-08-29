'use strict';

module.exports = function(app){
  app.controller('ImageController1', function() {
    this.imageGallery = require('../data/images4.js');
    this.thumbnail = false;
  });
};
