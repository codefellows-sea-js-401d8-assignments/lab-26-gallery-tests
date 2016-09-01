'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/gallery')(testApp);

describe('gallery testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.gallery = [{title: 'title', url: 'url', description: 'description', id: '1'}];
    this.scope.thumbnail = false;
  }));

  it('should display a gallery', function(){
    let gallery = this.compile(require('./test-template.html'))(this.scope);
    this.scope.$digest();
    expect(gallery.find('h2').text()).toBe('test');
    expect(gallery.find('ul').length).toBe(2);
  });

  it('button should switch view', function(){
    let gallery = this.compile(require('./test-template.html'))(this.scope);
    this.scope.$digest();
    expect(this.scope.thumbnail).toBe(false);
    gallery.find('button')[1].click();
    expect(this.scope.thumbnail).toBe(true);
  });

  it('should plug in a text data', function(){
    let gallery = this.compile(require('./test-template.html'))(this.scope);
    this.scope.$digest();
    expect(gallery.find('a').length).toBe(4);
  });
});
