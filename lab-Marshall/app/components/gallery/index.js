'use strict';

module.exports = function(demoApp){
  require('./images')(demoApp);
  require('./gallery-directive')(demoApp);
  require('./gallery-ctrl')(demoApp);
};
