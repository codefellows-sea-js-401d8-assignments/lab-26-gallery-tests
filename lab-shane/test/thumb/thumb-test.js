'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', [require('angular-route')]);

require('../../app/controllers/controller-index.js')(testApp);
require('../../app/components/components-index.js')(testApp);

describe('thumb directive testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $routeParams){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.galleryId = 1;
  }));

  it('should display a series of thumbnails', function(){
    let thumb = this.compile('<thumb></thumb>')(this.scope);
    this.scope.$digest();
    let album = thumb.isolateScope().album;
    album.findAlbumId();
    expect(thumb.find('a').length).toBe(8);
    expect(thumb.find('a').attr('href')).toBe('#/album/1/full/0');
    expect(thumb.find('img').attr('src').slice(7, 20)).toBe('cdn.smosh.com');
    expect(thumb.find('img').length).toBe(8);
  });
});
