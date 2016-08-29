'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/dog-gallery')(testApp);

describe('dog gallery components', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.gallery = [{title: 'title1', url: 'url1', description: 'description1', id: '1'}, {title: 'title2', url: 'url2', description: 'description2', id: '2'}];
    this.scope.thumbnail = false;
  }));

  it('should list images', function() {
    let imageGallery = this.compile(require('./dog-test.html'))(this.scope);
    this.scope.$digest();
    expect(imageGallery.find('h2').text()).toBe('test-title');
    expect(imageGallery.find('table').length).toBe(this.scope.gallery.length);
  });

  it('should change the thumbnail property to true', function() {
    let imageGallery = this.compile(require('./dog-test.html'))(this.scope);
    this.scope.$digest();
    expect(this.scope.thumbnail).toBe(false);
    imageGallery.find('button')[1].click();
    imageGallery.triggerHandler('button');
    expect(this.scope.thumbnail).toBe(true);
  });
});
