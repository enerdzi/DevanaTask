angular.module('Nautalius')
    .factory('EntryService', ['EntryModel', function (EntryModel) {
        var service = {};

        var rootEntry = EntryModel.makeRoot();
        var currentDirectory = rootEntry;

        service.getRootEntry = function () {
            return rootEntry;
        };

        service.addEntry = function (parent, entry) {
            if (parent instanceof EntryModel.Entry) {
                return parent.addEntry(entry);
            }
            return false;
        };

        service.deleteEntry = function (entry) {
            if (entry.getParent()) {
                entry.getParent().removeEntry(entry);
            }
        };

        return service;
    }]);