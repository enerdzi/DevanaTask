angular.module('Nautalius')
    .controller('AppCtrl', ['$scope', '$mdSidenav', 'EntryService', 'EntryModel', function ($scope, $mdSidenav, EntryService, EntryModel) {
        $scope.openNewFileModal = function () {

        };
        $scope.openNewDirectoryModal = function () {

        };
        $scope.toggleSidebarLeft = function () {
            $mdSidenav('left').toggle();
            $mdSidenav('right').close();
        };
        $scope.toggleSidebarRight = function () {
            $mdSidenav('right').toggle();
            $mdSidenav('left').close();
        };
        $scope.rootEntry = EntryService.getRootEntry();

        function stressTest(root, level) {
            for (var i = 0; i < 4 - level; i++) {
                var newDir = EntryModel.make({
                    name: root.name + '-' + i,
                    isDir: true,
                    parent: root
                });
                EntryService.addEntry(root, newDir);
                stressTest(newDir, level + 1);
            }
            var file = EntryModel.make({
                name: 'File #1.html',
                isDir: false,
                parent: root
            });
            var file2 = EntryModel.make({
                name: 'File #2.js',
                isDir: false,
                parent: root
            });
            
            EntryService.addEntry(root, file);
            EntryService.addEntry(root, file2);
        }

        stressTest($scope.rootEntry, 0);
    }]);