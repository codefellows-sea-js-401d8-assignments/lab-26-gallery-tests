'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const testApp = require('angular').module('testApp', []);

require('../../app/components/components-index.js')(testApp);
require('../../app/controllers/controller-index.js')(testApp);

describe('list directive testing', function(){
  beforeEach(angular.mocks.inject('testApp'));
  beforeEach(angular.mocks.inject(function($rootScope, $compile){
    this.compile = $compile;
    this.scope = $rootScope.new();
    this.scope.currentAlbum.pics = [{name: 'test1'}, {name: 'test2'}, {name: 'test3'}, {name: 'test4'}];
  }));

  it('should display a listing of photos', function(){
    let list = this.compile(require('./list-teset.html'))(this.scope);
    this.scope.$digest();
    expect(list.find('h3:nth-of-type(3)').text()).toBe('test3');
    expect(list.find('a').length).toBe(this.scope.currentAlbum.pics.length);
  });

});
