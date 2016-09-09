'use strict';

module.exports = function(demoApp){
  require('./fullsize')(demoApp);
  require('./home')(demoApp);
  require('./thumb')(demoApp);
  require('./fulldisplay')(demoApp);
  require('./images')(demoApp);
  require('./images2')(demoApp);
  require('./images3')(demoApp);
  require('./auth-controller')(demoApp);
};
