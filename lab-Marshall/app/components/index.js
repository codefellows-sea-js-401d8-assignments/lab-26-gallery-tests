'use strict';

module.exports = function(demoApp){
  require('./fullsize')(demoApp);
  require('./home')(demoApp);
  require('./thumbnail')(demoApp);
  require('./gallery')(demoApp);
  require('./sign-up')(demoApp);
  require('./log-in')(demoApp);
  require('./delete-token')(demoApp);
};
