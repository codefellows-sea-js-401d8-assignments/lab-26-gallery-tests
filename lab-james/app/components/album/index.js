'use strict';

module.exports = function(app) {
  require('./album_directive')(app);
  require('./album_controller')(app);
};
