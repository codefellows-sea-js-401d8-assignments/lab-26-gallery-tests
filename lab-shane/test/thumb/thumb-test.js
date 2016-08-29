'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const testApp = require('angular').module('testApp', []);

require('../../app/controllers/controller-index.js')(testApp);
require('../../app/components/components-index.js')(testApp);

describe('thumb directive testing', function(){
  beforeEach(angular.mocks.inject('testApp'));
  beforeEach(angular.mocks.inject(function($rootScope, $compile){
    this.compile = $compile;
    this.scope = $rootScope.new();
    this.scope.currentAlbum.pics = [{location: 'test1'}, {location: 'test2'}, {location: 'test3'}, {location: 'test4'}];

  }));

  it('should display a series of thumbnails', function(){
    let thumb = this.compile(require('./thumb-test.html'))(this.scope);
    this.scope.$digest();
    expect(thumb.find('img:nth-of-type(3)').attr('src')).toBe('test3');
    expect(thumb.find('img').length).toBe(this.scope.currentAlbum.pics.length);
  });

});
