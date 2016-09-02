'use strict';

module.exports = function(app) {
  require('./text_directive_ctrl')(app);
  require('./text_directive')(app);
};
