require('./home.less');
var resultsModule = require('./results');
var addPersonModule = require('./addPerson');
var homeController = require('./home.controller');

module.exports = angular.module('debtCalculator.home', [
    resultsModule,
    addPersonModule
])
    .controller('home', homeController)
    .name;
