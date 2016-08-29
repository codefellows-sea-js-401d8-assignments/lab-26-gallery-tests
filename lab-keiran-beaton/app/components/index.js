'use strict';

module.exports = function(app) {
  require('./lance-gallery')(app);
  require('./paul-gallery')(app);
  require('./dog-gallery')(app);
};
