'use strict';

module.exports = function(app) {
  require('./signin')(app);
  require('./signup')(app);
  require('./album-component')(app);
  require('./thumbnail-component')(app);
  require('./fullsize-component')(app);
};
