angular.module('Nautalius')
    .constant('MIN_ENTRY_NAME_LEN', 1)
    .constant('MAX_ENTRY_NAME_LEN', 50)
    .factory('EntryService', ['EntryModel', 'MIN_ENTRY_NAME_LEN', 'MAX_ENTRY_NAME_LEN', function (EntryModel, MIN_ENTRY_NAME_LEN, MAX_ENTRY_NAME_LEN) {
        var service = {};
        var rootEntry = EntryModel.makeRoot();

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
            if (name.length < MIN_ENTRY_NAME_LEN || name.length > MAX_ENTRY_NAME_LEN) {
                return false;
            }
            if (!entry.isDir && !EntryModel.checkExtension(name)) {
                return false;
            }
            var newEntry = entry;
            var oldName = entry.name;
            newEntry.rename(name);
            service.deleteEntry(entry);
            if (service.addEntry(newEntry.getParent(), newEntry)) {
                return true;
            }
            newEntry.rename(oldName);
            service.addEntry(newEntry.getParent(), newEntry);
            return false;
        };

        return service;
    }]);