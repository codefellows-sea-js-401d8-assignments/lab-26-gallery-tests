'use strict';

module.exports = function(demoApp){
  require('./fullsize')(demoApp);
  require('./home')(demoApp);
  require('./thumbnail')(demoApp);
};
