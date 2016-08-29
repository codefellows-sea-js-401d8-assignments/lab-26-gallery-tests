'use strict';

module.exports = function(app) {
  require('./paul-image')(app);
  require('./paul-controller')(app);
  require('./paul-directive')(app);
};
