'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/
const angular = require('angular');
const testApp = require('angular').module('testApp', [require('angular-route')]);

require('../../app/components/components-index.js')(testApp);
require('../../app/controllers/controller-index.js')(testApp);

describe('list directive testing', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $routeParams){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.galleryId = 0;
  }));

  it('should display a listing of photos', function(){
    let list = this.compile('<list></list>')(this.scope);
    this.scope.$digest();
    let album = list.isolateScope().album;
    album.findAlbumId();
    expect(list.find('a').length).toBe(8);
    expect(list.find('a').attr('href')).toBe('#/album/0/full/0');
    expect(list.find('h3').text().slice(0, 18)).toBe('Quit Playing Games');
    expect(list.find('h3').length).toBe(8);
    expect(list.find('h5').text().slice(0, 14)).toBe('#allthesegames');
    expect(list.find('h5').length).toBe(8);
  });
});
