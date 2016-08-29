'use strict';

module.exports = function(app) {
  require('./home_directive')(app);
  require('./home_controller')(app);
};
