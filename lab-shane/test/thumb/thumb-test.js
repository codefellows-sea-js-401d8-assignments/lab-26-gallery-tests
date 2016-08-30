'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', []);

require('../../app/controllers/controller-index.js')(testApp);
require('../../app/components/components-index.js')(testApp);

describe('thumb directive testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile){
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display a series of thumbnails', function(){
    let thumb = this.compile(require('./thumb-test.html'))(this.scope);
    this.scope.$digest();
    expect(thumb.find('img:nth-of-type(3)').attr('src')).toBe('test3');
    expect(thumb.find('img').length).toBe(8);
  });

});
