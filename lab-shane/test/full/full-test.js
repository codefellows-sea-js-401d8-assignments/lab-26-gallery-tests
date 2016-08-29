'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', []);

require('../../app/components/components-index.js')(testApp);
require('../../app/controllers/controller-index.js')(testApp);

describe('full testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $controller, $routeParams){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.controller = $controller;
    this.routeParams = $routeParams;
    this.$routeParams.galleryId = 2;
    this.$routeParams.fullId = 2;
    debugger;
  }));

  it('should display the title of the pic', function(){
    let full = this.compile(require('./full-test.html'))(this.scope);
    this.scope.$digest();
    debugger;
    expect(full.find('h1').text().slice(0,5)).toBe('Drake');
  });

});
