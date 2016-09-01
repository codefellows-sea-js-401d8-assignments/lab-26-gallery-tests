'use strict';
//
module.exports = function(demoApp){
  demoApp.controller('ThumbController', ['$routeParams', '$location', function($routeParams, $location){
    this.images = [{
      id: 1,
      url: 'http://vignette1.wikia.nocookie.net/onepunchman/images/1/18/Slider_dos.png/revision/latest/scale-to-width-down/670?cb=20130220223313',
      title: 'Saitama 1',
      description: 'First saitama image'
    }, {
      id: 2,
      url: 'http://media.fyre.co/HmWDsHkfTFyShq7GqbE1_b01.png',
      title: 'Saitama 2',
      description: 'Second saitama image'
    }, {
      id: 3,
      url: 'https://de7i3bh7bgh0d.cloudfront.net/2016/07/13/20/36/14/222e1fed-24d4-4ead-bb74-52e888eef12b/viz-blog_saitama.jpg',
      title: 'Saitama 3',
      description: 'Third saitama image'
    }, {
      id: 4,
      url: 'https://images.alphacoders.com/656/656720.jpg',
      title: 'Saitama 4',
      description: 'Fourth saitama image'
    }, {
      id: 5,
      url: 'http://static.zerochan.net/Saitama.(One.Punch.Man).full.1947184.jpg',
      title: 'Saitama 1',
      description: 'First SAITAMA image'
    }, {
      id: 6,
      url: 'https://i.ytimg.com/vi/4zsOVbNl8yo/maxresdefault.jpg',
      title: 'Saitama 2',
      description: 'Second SAITAMA image'
    }, {
      id: 7,
      url: 'https://s-media-cache-ak0.pinimg.com/736x/0e/e6/6d/0ee66d20ef99b9ee6753076213df9635.jpg',
      title: 'Saitama 3',
      description: 'Third SAITAMA image'
    }, {
      id: 8,
      url: 'https://images.alphacoders.com/656/656720.jpg',
      title: 'Saitama 4',
      description: 'Fourth SAITAMA image'
    }, {
      id: 9,
      url: 'http://vignette2.wikia.nocookie.net/mob-psycho-100/images/4/45/Slider_uno.png/revision/latest/scale-to-width-down/670?cb=20160223021708',
      title: 'Saitama 1',
      description: 'First MOB image'
    }, {
      id: 10,
      url: 'http://bigglasgowcomic.com/wp-content/uploads/2016/02/Mob-Psycho-100-manga-847x600.jpg',
      title: 'Saitama 2',
      description: 'Second MOB image'
    }, {
      id: 11,
      url: 'http://cdn.mangaheat.com/98/bbrby/rtcrcoa/2_95045.jpg',
      title: 'Saitama 3',
      description: 'Third MOB image'
    }, {
      id: 12,
      url: 'https://i.ytimg.com/vi/40bZmeDA0YA/maxresdefault.jpg',
      title: 'Saitama 4',
      description: 'Fourth MOB image'
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
