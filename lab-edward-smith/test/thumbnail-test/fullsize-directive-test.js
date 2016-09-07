'use strict';

const angular = require('angular');
const galleryApp = angular.module('galleryApp', [require('angular-route')]);

require('../../app/components/fullsize-component')(galleryApp);
require('../../app/controllers')(galleryApp)


describe('Fullsize directive', function() {
  beforeEach(angular.mock.module('galleryApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope, $routeParams) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.id = 1;
    $routeParams.imageId = 1;
  }));

  it('should exists', function() {
    let fullsize = this.compile(require('./fullsize-directive-test.html'))(this.scope);
    this.scope.$digest();
    debugger;
    expect(fullsize.find('h1').text()).toBe('Sad boxer');
    expect(fullsize.find('img').attr('src')).toBe('http://www.kentuckianaboxer.com/images/Boxer1.jpg');
  });
});
