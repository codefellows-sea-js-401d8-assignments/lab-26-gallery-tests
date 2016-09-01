'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', []);

// controllers
require('../../app/controllers/controller-index.js')(testApp);

// directives
require('../../app/components/components-index.js')(testApp);


describe('testing testApp', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('home directive should populate 3 galleries', function() {
    let home = this.compile(require('./home-test.html'))(this.scope);
    this.scope.$digest();

    expect(home.find('h4').length).toBe(3);
    expect(home.find('h4').text().slice(0, 5)).toBe('Drake');
  });

});
