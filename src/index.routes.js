var angularRouter = require('angular-ui-router');
mainRoutesConfig.$inject = ['$stateProvider'];
mainRouteRun.$inject = ['$state'];
module.exports = angular.module('debtCalculator.routes', [angularRouter], mainRoutesConfig)
    .run(mainRouteRun)
    .name;


function mainRoutesConfig($stateProvider) {
    var count = 0;
    $stateProvider.state('home', {
        template: require('./home/home.html'),
        controller: 'home',
        resolve: {
            mainList: ['$state', function (state) {
                return [{
                    displayName: 'results',
                    go: function () {
                        state.transitionTo('home.results');
                    },
                    count: count++
                }, {
                    displayName: 'Add person',
                    go: function () {
                        state.transitionTo('home.addperson');
                    },
                    count: count++
                }];
            }]
        }
    });
}

function mainRouteRun($state) {
    $state.go('home');
}