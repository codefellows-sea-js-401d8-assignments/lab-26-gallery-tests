'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', []);

require('../../app/components/components-index.js')(testApp);
require('../../app/controllers/controller-index.js')(testApp);

describe('list directive testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile){
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display a listing of photos', function(){
    let list = this.compile(require('./list-test.html'))(this.scope);
    this.scope.$digest();
    expect(list.find('h3:nth-of-type(3)').text()).toBe('test3');
    expect(list.find('a').length).toBe(8);
  });

});
