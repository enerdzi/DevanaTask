angular.module('Nautalius')
    .controller('AppCtrl', ['$scope', '$mdSidenav', 'EntryService', 'EntryModel', 'Events', 'StressTest',
        function ($scope, $mdSidenav, EntryService, EntryModel, Events, StressTest) {
            $scope.showFiles = true;
            $scope.rootEntry = EntryService.getRootEntry();

            $scope.toggleSidebarLeft = function () {
                $mdSidenav('left').toggle();
            };

            $scope.showAddDirectoryForm = function () {
                switchToAddingMode(true);
            };

            $scope.showAddFileForm = function () {
                switchToAddingMode(false);
            };

            $scope.addNewEntry = function () {
                if (EntryService.addEntry($scope.newEntry.parent, EntryModel.make($scope.newEntry))) {
                    $scope.isInAddingMode = false;
                }
            };

            $scope.cancelAddingEntry = function () {
                $scope.isInAddingMode = false;
            };

            $scope.$on(Events.ACTIVE_DIR_CHANGE, function (e, newActiveDirectory) {
                if ($scope.newEntry) {
                    $scope.activeDir = newActiveDirectory;
                    $scope.newEntry.parent = newActiveDirectory;
                }
            });

            $scope.$on(Events.DIR_DELETED, function (e, deletedDirectory) {
                if ($scope.activeDir && _.isEqual($scope.activeDir, deletedDirectory)) {
                    $scope.activeDir = EntryService.getRootEntry();
                    $scope.newEntry.parent = EntryService.getRootEntry();
                }
            });

            function switchToAddingMode(isDir) {
                $scope.isInAddingMode = true;
                $scope.activeDir = EntryService.getRootEntry();
                $scope.toggleSidebarLeft();
                $scope.newEntry = {
                    name: '',
                    isDir: isDir,
                    parent: $scope.activeDir
                };
            }

            StressTest.generateData($scope.rootEntry);
        }]);