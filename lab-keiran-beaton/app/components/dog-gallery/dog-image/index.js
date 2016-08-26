'use strict';

module.exports = function(app) {
  require('./dog-image-controller')(app);
  require('./dog-image-directive')(app);
};
