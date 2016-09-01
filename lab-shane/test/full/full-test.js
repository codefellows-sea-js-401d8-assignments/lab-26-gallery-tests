'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', []);

require('../../app/components/components-index.js')(testApp);
require('../../app/controllers/controller-index.js')(testApp);

describe('full testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $routeParams){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.galleryId = 3;
    $routeParams.fullId = 2;
  }));

  it('should display the title of the pic', function(){
    let full = this.compile(require('../../app/components/full/full.html'))(this.scope);
    this.scope.$digest();
    expect(full.find('h1').text().slice(0,5)).toBe('That ');
  });

});
