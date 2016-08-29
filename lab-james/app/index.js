'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const route_config = require('./routes/route_config');
const imageApp = angular.module('imageApp', [require('angular-route')]);

imageApp.config(route_config);

require('./controllers')(imageApp);
require('./components')(imageApp);
