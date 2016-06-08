angular.module('Nautalius')
    .factory('StressTest', ['EntryModel', 'EntryService', function (EntryModel, EntryService) {

        var service = {};

        service.generateData = function (root, level) {
            if (!level) {
                level = 0;
            }
            for (var i = 0; i < 4 - level; i++) {
                var newDir = EntryModel.make({
                    name: root.name + '-' + i,
                    isDir: true,
                    parent: root
                });
                EntryService.addEntry(root, newDir);
                service.generateData(newDir, level + 1);
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
        };

        return service;
    }]);