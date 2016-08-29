'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/album_components/fullsize_component');

describe('album thumbnail component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));
});
