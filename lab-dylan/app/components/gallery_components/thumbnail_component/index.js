'use strict';

module.exports = function(app) {
  require('./thumbnail_directive_ctrl')(app);
  require('./thumbnail_directive')(app);
};
