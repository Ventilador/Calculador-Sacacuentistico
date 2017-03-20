var addPersonController = require('./addPerson.controller');
doConfig.$inject = ['$stateProvider'];
module.exports = angular.module('debtCalculator.home.addPerson', [], doConfig)
    .controller('addPerson', addPersonController)
    .name;
function doConfig($stateProvider) {
    var count = 0;
    $stateProvider.state('home.addperson', {
        template: require('./addPerson.template.html'),
        controller: 'addPerson',
        resolve: {
            count: function () {
                return count++;
            }
        }
    });
}
