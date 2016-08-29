'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/home')(testApp);

describe('test the home component', function() {
  beforeEach(function() {
    angular.mock.module('testApp');
    angular.mock.inject(function($compile, $rootScope) {
      this.compile = $compile;
      this.scope = $rootScope.$new();
      this.scope.albums = [
        {
          albumId: 1,
          title: 'Villains',
          description: 'Should\'ve been in Suicide Squad.',
          showAlbum: false,
          viewThumbnail: false,
          viewList: true,
          fullsize: false,
          images: [
            {
              id: 1,
              title: 'Syndrome',
              description: '1337 N3RD R463.',
              url: 'http://img.lum.dolimg.com/v1/images/image_7b7a8d9b.jpeg',
              showFullsize: false
            },
            {
              id: 2,
              title: 'Lots\'O Huggin\'',
              description: 'Don\'t hug it out.',
              url: 'https://pbs.twimg.com/profile_images/1313971811/toy-story-3-lotso-bear_400x400.jpg',
              showFullsize: false
            },
            {
              id: 3,
              title: 'Sid Phillips',
              description: 'This kid needs Jesus.',
              url: 'https://pbs.twimg.com/profile_images/471625645483495424/v-JTwotY_400x400.jpeg',
              showFullsize: false
            },
            {
              id: 4,
              title: 'Lord Farquuad',
              description: 'The evilest (it\'s a word) of them all.',
              url: 'http://i1.kym-cdn.com/entries/icons/original/000/020/110/Dfdddddd.jpeg',
              showFullsize: false
            }
          ]
        }
      ];
    });
  });

  it('should create a list of albums', function() {
    let homepageTest = this.compile(require('./home-test.html'))(this.scope);
    this.scope.$digest();
    expect(homepageTest.find('strong').text()).toBe('Villains');
  });
});
