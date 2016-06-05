angular.module('Nautalius')
    .factory('EntryService', ['EntryModel', function (EntryModel) {
        var service = {};

        var rootEntry = EntryModel.makeRoot();
        var currentDirectory = rootEntry;

        service.getRootEntry = function () {
            return rootEntry;
        };

        service.addEntry = function (parent, entry) {
            if (parent instanceof EntryModel.Entry && !parent.entryExists(entry.name)) {
                return parent.addEntry(entry);
            }
            return false;
        };

        service.deleteEntry = function (entry) {
            if (entry.getParent()) {
                entry.getParent().removeEntry(entry);
            }
        };

        service.renameEntry = function (entry, name) {
            if (!entry.isDir && !EntryModel.checkExtension(name)) {
                return false;
            }
            var newEntry = entry;
            service.deleteEntry(entry);
            newEntry.rename(name);
            return service.addEntry(newEntry.getParent(), newEntry);
        };

        return service;
    }]);