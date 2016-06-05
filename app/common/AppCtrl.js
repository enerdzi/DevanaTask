angular.module('Nautalius')
    .controller('AppCtrl', ['$scope', '$mdSidenav', 'EntryService', 'EntryModel', function ($scope, $mdSidenav, EntryService, EntryModel) {
        $scope.openNewFileModal = function () {

        };
        $scope.openNewDirectoryModal = function () {

        };
        $scope.toggleSidebar = function () {
            $mdSidenav('left').toggle();
        };
    }]);