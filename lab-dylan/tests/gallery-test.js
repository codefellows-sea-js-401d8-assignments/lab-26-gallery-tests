'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components');

describe('gallery components', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.albums= [{albumId: 1, albumName: 'test album', images: [{name: 'testA1 1', url: 'fakeurl1', id: 1}, {name: 'testA1 2', url: 'fakeurl2', id: 2}]}, {albumId: 2, albumName: 'test album2', images: [{name: 'testA2  1', url: 'fakeurl1', id: 1}, {name: 'test 2', url: 'fakeurl2', id: 2}]}];
  }));
});
