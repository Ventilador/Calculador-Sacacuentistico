require('angular');
require('./index.less');
var homeModule = require('./home');
var routesModule = require('./index.routes');
module.exports = angular.module('debtCalculator', ['ng', routesModule, homeModule])
    .name;