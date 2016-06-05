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
            name: 'Dir3',
            parent: $scope.rootEntry,
            isDir: true
        }));
        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'File1.html',
            parent: $scope.rootEntry,
            isDir: false
        }));
        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'File1.js',
            parent: $scope.rootEntry,
            isDir: false
        }));
        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'File1.css',
            parent: $scope.rootEntry,
            isDir: false
        }));
        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'File1.php',
            parent: $scope.rootEntry,
            isDir: false
        }));
        EntryService.addEntry($scope.rootEntry, EntryModel.make({
            name: 'Dir2',
            parent: $scope.rootEntry,
            isDir: true
        }));

        console.log(EntryService.renameEntry($scope.rootEntry.getDirectories()[0], 'Nova1'));
        console.log(EntryService.renameEntry($scope.rootEntry.getFiles()[0], 'Nova2'));
        console.log(EntryService.renameEntry($scope.rootEntry.getFiles()[0], 'Nova3.php'));
    }]);