'use strict';

module.exports = function(demoApp){
  require('./fullsize')(demoApp);
  require('./home')(demoApp);
  require('./thumbnail')(demoApp);
  require('./gallery')(demoApp);
  require('./sign-up')(demoApp);
  require('./sign-in')(demoApp);
};
