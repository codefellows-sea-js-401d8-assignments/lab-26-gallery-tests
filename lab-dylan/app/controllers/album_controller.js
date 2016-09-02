'use strict';

module.exports = function(app) {
  app.controller('GalleryController', function() {
    this.showThumbnails = false;
    this.showFullsize = false;
    this.showList = true;

    this.albums = [
      {
        albumId: 1,
        albumName: 'Corgis',
        albumDescription: 'Corgi Collection'
        images: [
        id: 1,
        url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwigmKOyjd3OAhUQ32MKHTIrDIUQjRwIBw&url=http%3A%2F%2Fmentalfloss.com%2Farticle%2F63484%2F11-short-facts-about-corgis&bvm=bv.130731782,d.cGc&psig=AFQjCNFT1IBSHwNW58fVQAvGRdUmquQ4aA&ust=1472232980271995',
        description: 'Running Corgi',
        name: 'Corgi in the snow'
      }, {
        id: 2,
        url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=http%3A%2F%2Fcutepuppyoftheday.com%2F&bvm=bv.130731782,d.cGc&psig=AFQjCNFT1IBSHwNW58fVQAvGRdUmquQ4aA&ust=1472232980271995',
        description: 'Diving Corgi',
        name: 'Active Corgi'
      }, {
        id: 3,
        url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=http%3A%2F%2Fwesharepics.info%2Fimagesgkl-so-excited-dog-gif.asp&bvm=bv.130731782,d.cGc&psig=AFQjCNFT1IBSHwNW58fVQAvGRdUmquQ4aA&ust=1472232980271995',
        description: 'Skidding Corgi in the snow',
        name: 'Skidding Corgi'
      }], {
        albumId: 2,
        albumName: 'Bunnies',
        albumDescription: 'Bunny Collection',
        images: [
        id: 1,
        url:    'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'Cute Bunny 1',
        name: 'Cute Bunny'
      }, {
        albumId: 2,
        id: 2,
        url: 'https://c4.staticflickr.com/5/4070/4479409507_844b7129e7_b.jpg',
        description: 'Cute Bunny 2',
        name: 'Another Cute Bunny'
      }, {
        albumId: 2,
        id: 3,
        url: 'https://c1.staticflickr.com/3/2019/5824431381_7fc17099d5_b.jpg',
        description: 'Cute Bunny 3',
        name: 'Yet Another Cute Bunny'
      }]];
  });
};
