'use strict';

module.exports = function(demoApp){
  demoApp.controller('GalleryButtonController', function(){
    this.showThumb = () => {
      this.thumbnail = true;
    };
    this.showTable = () => {
      this.thumbnail = false;
    };
  });
};
