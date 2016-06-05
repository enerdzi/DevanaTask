angular.module('Nautalius')
    .controller('AppCtrl', ['$scope', '$mdSidenav', 'EntryService', 'EntryModel', function ($scope, $mdSidenav, EntryService, EntryModel) {
        $scope.openNewFileModal = function () {

        };
        $scope.openNewDirectoryModal = function () {

        };
        $scope.toggleSidebar = function () {
            $mdSidenav('left').toggle();
        };
        $scope.rootEntry = EntryService.getRootEntry();

        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'Dir1',
            parent: $scope.rootEntry,
            isDir: true
        }));
        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'File1.html',
            parent: $scope.rootEntry,
            isDir: false
        }));
        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'Dir2',
            parent: $scope.rootEntry,
            isDir: true
        }));

        console.log($scope.rootEntry);
    }]);