angular.module('Nautalius')
    .controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openNewFileModal = function () {

        };
        $scope.openNewDirectoryModal = function () {

        };
        $scope.toggleSidebar = function () {
            $mdSidenav('left')
                .toggle()
        };
    }]);