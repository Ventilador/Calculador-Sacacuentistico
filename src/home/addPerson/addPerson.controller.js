resultsController.$inject = ['count', '$scope']
module.exports = resultsController;
function resultsController(count, $scope) {
    $scope.count = count;
}
