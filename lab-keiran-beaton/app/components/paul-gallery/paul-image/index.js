'use strict';

module.exports = function(app) {
  require('./paul-image-controller')(app);
  require('./paul-image-directive')(app);
};
