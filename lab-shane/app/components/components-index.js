'use strict';

module.exports = function(app) {
  require('./home/home-directive')(app);
  require('./album/album-directive')(app);
  require('./list/list-directive')(app);
  require('./thumb/thumb-directive')(app);
  require('./full/full-directive')(app);
};
