'use strict';

const angular = require('angular');
let testApp2 = angular.module('testApp2', []);
require('../app/components/paul-gallery')(testApp2);

describe('lance stephenson gallery components', function() {
  beforeEach(angular.mock.module('testApp2'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.gallery = [{title: 'title1', url: 'url1', description: 'description1', id: '1'}, {title: 'title2', url: 'url2', description: 'description2', id: '2'}];
    this.scope.thumbnail = false;
  }));

  it('should list images', function() {
    let imageGallery = this.compile(require('./paul-test.html'))(this.scope);
    this.scope.$digest();
    expect(imageGallery.find('h2').text()).toBe('test-title');
    expect(imageGallery.find('table').length).toBe(this.scope.gallery.length);
  });

  it('should change the thumbnail property to true', function() {
    let imageGallery = this.compile(require('./paul-test.html'))(this.scope);
    this.scope.$digest();
    expect(this.scope.thumbnail).toBe(false);
    imageGallery.find('button')[1].click();
    expect(this.scope.thumbnail).toBe(true);
  });

  it('should have the proper information for each image', function() {
    let imageGallery = this.compile(require('./paul-test.html'))(this.scope);
    this.scope.$digest();
    expect(imageGallery.find('a').text()).toBe(this.scope.gallery.map((image) => image.title).join(''));
  });
});
