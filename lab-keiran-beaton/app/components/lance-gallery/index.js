'use strict';

module.exports = function(app) {
  require('./lance-image')(app);
  require('./lance-controller')(app);
  require('./lance-directive')(app);
};
