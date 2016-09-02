'use strict';

module.exports = function(app) {
  require('./fullsize_directive_ctrl')(app);
  require('./fullsize_directive')(app);
};
