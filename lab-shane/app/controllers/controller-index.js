'use strict';

module.exports = function(app) {
  require('./home-controller.js')(app);
  require('./album-controller.js')(app);
};
