'use strict';

module.exports = function(app) {
  require('./lance-image-controller')(app);
  require('./lance-image-directive')(app);
};
