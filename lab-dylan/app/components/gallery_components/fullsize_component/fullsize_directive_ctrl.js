'use strict';

module.exports = function(app) {
  app.controller('FullsizeController', function() {
    this.imgUrl = .albums[$routeParams.albumId].images[$routeParams.id].url;
    this.imgDescription = $scope.albums[$routeParams.albumId].images[$routeParams.id].description;

  });
};
