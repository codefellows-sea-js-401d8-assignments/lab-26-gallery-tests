'use strict';

module.exports = function(app) {
  app.controller('LanceController', function() {
    this.showThumbnail = () => {
      this.thumbnail = true;
    };
    this.showTable = () => {
      this.thumbnail = false;
    };
  });
};
