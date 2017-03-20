var resultsController = require('./results.controller');
doConfig.$inject = ['$stateProvider'];
module.exports = angular.module('debtCalculator.home.results', [], doConfig)
    .controller('results', resultsController)
    .name;
function doConfig($stateProvider) {
    $stateProvider.state('home.results', {
        template: require('./results.template.html'),
        controller: 'results'
    });
}
