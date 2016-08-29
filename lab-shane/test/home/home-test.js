'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const testApp = require('angular').module('testApp', []);

// controllers
require('../../app/controllers/controller-index.js')(testApp);

// directives
require('../../app/components/components-index.js')(testApp);


describe('testing testApp', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.new();
    this.scope.albums = [{name: 'test1'}, {name: 'test2'}, {name: 'test3'}];
  }));

  it('home directive should populate 3 galleries', function() {
    let home = this.compile(require('./home-test.html'))(this.scope);
    this.scope.$digest();

    expect(home.find('img').length).toBe(this.scope.albums.length);
    expect(home.find('h4:nth-of-type(2)').text()).toBe('test2');
  });

});
