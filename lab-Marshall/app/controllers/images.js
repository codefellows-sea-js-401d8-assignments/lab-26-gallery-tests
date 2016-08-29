'use strict';
//
module.exports = function(demoApp){
  demoApp.controller('ImgController', ['$routeParams', '$location', function($routeParams, $location){
    this.images = [{
      id: 1,
      url: 'http://vignette1.wikia.nocookie.net/onepunchman/images/1/18/Slider_dos.png/revision/latest/scale-to-width-down/670?cb=20130220223313',
      title: 'Saitama 1',
      description: 'First saitama image'
    }, {
      id: 2,
      url: 'http://media.fyre.co/HmWDsHkfTFyShq7GqbE1_b01.png',
      title: 'Saitama 2',
      description: 'First saitama image'
    }, {
      id: 3,
      url: 'https://de7i3bh7bgh0d.cloudfront.net/2016/07/13/20/36/14/222e1fed-24d4-4ead-bb74-52e888eef12b/viz-blog_saitama.jpg',
      title: 'Saitama 3',
      description: 'First saitama image'
    }, {
      id: 4,
      url: 'https://images.alphacoders.com/656/656720.jpg',
      title: 'Saitama 4',
      description: 'First saitama image'
    }];

    this.image = {};

    this.isValidId = function(id){
      if (isNaN(id)) return false;
      if (!isFinite(id)) return false;
      if (id < 1) return false;
      if (typeof(this.images[id - 1]) === 'undefined') return false;
      return true;
    };

    if ($routeParams.id) {
      let id = Number.parseInt($routeParams.id);

      if (!this.isValidId(id)){
        $location.path('/');
      }
      this.image = this.images[id - 1];
    }
  }]);
};
