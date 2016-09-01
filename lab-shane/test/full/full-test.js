'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', [require('angular-route')]);

require('../../app/components/components-index.js')(testApp);
require('../../app/controllers/controller-index.js')(testApp);

describe('full testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $routeParams){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.galleryId = 2;
    $routeParams.fullId = 3;
  }));

  it('should display a large view of the pic', function(){
    let full = this.compile('<full-component></full-component>')(this.scope);
    this.scope.$digest();
    let album = full.isolateScope().album;
    album.findAlbumId();
    expect(full.find('a').attr('href')).toBe('#/album/2');
    expect(full.find('p').text()).toBe('Back');
    expect(full.find('h1').text().slice(0,100)).toBe('I Can\'t Wait');
    expect(full.find('img').length).toBe(1);
    expect(full.find('h4').text()).toBe('#bubblebath');
  });
});
