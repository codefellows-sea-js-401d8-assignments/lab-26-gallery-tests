'use strict';

module.exports = function(app) {
  require('./dog-image')(app);
  require('./dog-controller')(app);
  require('./dog-directive')(app);
};
