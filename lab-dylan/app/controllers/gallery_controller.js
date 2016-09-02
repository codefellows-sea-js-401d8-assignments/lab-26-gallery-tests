'use strict';

module.exports = function(app) {
  app.controller('GalleryController', ['$routeParams', '$location', '$rootScope', function($routeParams, $location, $rootScope) {
    this.showThumbnails = false;
    this.showFullsize = false;
    this.showList = true;
    this.toggleText = 'Grid';

    // this.viewFullsize = function(image)

    this.toggle = function() {
      if (this.toggleText === 'Grid') {
        this.toggleText = 'Table';
        this.showThumbnails = true;
        this.showList = false;
      } else {
        this.toggleText = 'Grid';
        this.showThumbnails = false;
        this.showList = true;
      }
    };

    this.toggleFullsize = function() {
      this.showFullsize = true;
      this.showList = false;
      this.showThumbnails = false;
    };

    this.albums = [
      {
        albumId: 0,
        albumName: 'Corgis',
        albumDescription: 'Corgi Collection',
        images: [{id: 0, url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwigmKOyjd3OAhUQ32MKHTIrDIUQjRwIBw&url=http%3A%2F%2Fmentalfloss.com%2Farticle%2F63484%2F11-short-facts-about-corgis&bvm=bv.130731782,d.cGc&psig=AFQjCNFT1IBSHwNW58fVQAvGRdUmquQ4aA&ust=1472232980271995', description: 'Running Corgi', name: 'Corgi in the snow'},
        {id: 1, description: 'Diving Corgi', name: 'Active Corgi', url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=http%3A%2F%2Fcutepuppyoftheday.com%2F&bvm=bv.130731782,d.cGc&psig=AFQjCNFT1IBSHwNW58fVQAvGRdUmquQ4aA&ust=1472232980271995'},
        {id: 2, description: 'Skidding Corgi in the snow', name: 'Skidding Corgi', url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=http%3A%2F%2Fwesharepics.info%2Fimagesgkl-so-excited-dog-gif.asp&bvm=bv.130731782,d.cGc&psig=AFQjCNFT1IBSHwNW58fVQAvGRdUmquQ4aA&ust=1472232980271995'
      }]}, {
        albumId: 1,
        albumName: 'Bunnies',
        albumDescription: 'Bunny Collection',
        images: [{id: 0, description: 'Cute Bunny 1', name: 'Cute Bunny', url:    'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      }, {id: 1, description: 'Cute Bunny 2', name: 'Another Cute Bunny', url: 'https://c4.staticflickr.com/5/4070/4479409507_844b7129e7_b.jpg'
    }, {id: 2, description: 'Cute Bunny 3', name: 'Yet Another Cute Bunny', url: 'https://c1.staticflickr.com/3/2019/5824431381_7fc17099d5_b.jpg'
    }]}];

    this.albumId = Number.parseInt($routeParams.albumId);
    this.imageId = Number.parseInt($routeParams.id);

    // Possibly for testing only
    this.albumIdVerify = function(albumId) {
      if (albumId < 0) return false;
      if (isNaN(albumId)) return false;
      if (!isFinite(albumId)) return false;
      if (typeof this.albums[albumId] === 'undefined') return false;
      return true;
    };


    // Possibly for testing only
    this.imageIdVerify = function(id) {
      if (id < 0) return false;
      if (isNaN(id)) return false;
      if (!isFinite(id)) return false;
      if (typeof(this.albums[this.albumId].images[id]) === 'undefined') return false;
      return true;
    };

    // Possibly for testing only
    this.getAlbumId = function() {
      if (!this.albumIdVerify(this.albumId)) $location.path('./error');
      this.currentAlbum = this.albums[this.galleryId];
    };

    // Possibly for testing only
    this.getImageId = function() {
      if(!this.imageIdVerify(this.imageId)) $location.path('./error');
      this.currentImage = this.albums[this.galleryId].images[this.imageId];
    };
  }]);
};
