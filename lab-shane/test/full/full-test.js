'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const testApp = require('angular').module('testApp', []);

require('../../app/components/components-index.js')(testApp);
require('../../app/controllers/controller-index.js')(testApp);

describe('full testing', function(){
  beforeEach(angular.mocks.inject('testApp'));
  beforeEach(angular.mocks.inject(function($rootScope, $compile){
    this.compile = $compile;
    this.scope = $rootScope.new();
    this.scope.whichPic = 0;
    this.scope.currentAlbum.pics = [{name: 'test1'}];
  }));

  it('should display the title of the pic', function(){
    let full = this.compile(require('./full-test.html'))(this.scope);
    this.scope.$digest();
    expect(full.find('h1').text().toBe('test1'));
  });

});
