'use strict';

module.exports = function(app) {
  require('./album-component')(app);
  require('./thumbnail-component')(app);
  require('./fullsize-component')(app);
};
