'use strict';

module.exports = function(app) {
  require('./image-controller')(app);
  require('./auth-controller')(app);
};
