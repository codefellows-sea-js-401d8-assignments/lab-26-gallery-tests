'use strict';

module.exports = function(app) {
  require('./image-controller1')(app);
  require('./image-controller2')(app);
  require('./image-controller3')(app);
  require('./full-controller')(app);
};
