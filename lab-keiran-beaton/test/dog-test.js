'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/dog-gallery/dog-directive')(testApp);

describe('dog gallery components', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.gallery = [{title: 'title1', url: 'url1', description: 'description1', id: '1', thumbnail: false}, {title: 'title2', url: 'url2', description: 'description2', id: '2', thumbnail: false}];
  }));

  it('should list images', function() {
    let imageGallery = this.compile(require('./dog-test.html'))(this.scope);
    this.scope.$digest();
    expect(imageGallery.find('a')[0].text()).toBe('test');
    expect(imageGallery.find('table').length).toBe(this.scope.notes.length);
  });
});
