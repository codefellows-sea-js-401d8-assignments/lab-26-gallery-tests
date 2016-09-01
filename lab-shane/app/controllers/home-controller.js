'use strict';

module.exports = function(app) {
  app.controller('HomeController', function() {
    this.albums = require('../data/albums.js');
  });
};
