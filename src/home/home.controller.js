homeController.$inject = ['$scope', 'mainList'];
function homeController($scope, mainList) {
    $scope.navigationItems = mainList;
    $scope.goTo = function (stateItem) {

    };
}
module.exports = homeController;