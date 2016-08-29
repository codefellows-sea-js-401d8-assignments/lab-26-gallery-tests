'use strict';

module.exports = function(app) {
  app.controller('TextComponentController', function() {
    this.description = this.description || 'no description';
    this.url = this.url || 'no link';
  });
};
