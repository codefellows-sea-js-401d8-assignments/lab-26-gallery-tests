'use strict';

module.exports = function(app) {
  require('./text_component')(app);
  require('./fullsize_component')(app);
  require('./thumbnail_component')(app);
  require('./gallery_directive_ctrl')(app);
  require('./gallery_directive')(app);
};
