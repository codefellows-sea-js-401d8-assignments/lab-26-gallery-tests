'use strict';

module.exports = function(app) {
  require('./text_component')(app);
  require('./fullsize_component')(app);
  require('./thumbnail_component')(app);
};
