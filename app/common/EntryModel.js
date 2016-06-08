angular.module('Nautalius')
    .constant('EXTENSIONS', {
        html: 'html',
        css: 'css',
        js: 'js',
        php: 'php'
    });

angular.module('Nautalius')
    .factory('EntryModel', ['EXTENSIONS', function (EXTENSIONS) {
        var entryModel = {};

        function Entry(name, parent, isDir, entries) {
            var self = this;
            this.name = String(name);
            this.parent = parent;
            this.isDir = isDir;
            
            if (this.isDir) {
                this.entries = entries || [];
            }

            this.rename = function (name) {
                self.name = name;
            };

            this.entryExists = function (name) {
                return _.findIndex(self.entries, {name: name}) !== -1;
            };

            this.getDirectories = function () {
                return _.sortBy(_.filter(self.entries, function (entry) {
                    return entry.isDir;
                }), function(o) {
                    return _.toLower(o.name);
                });
            };

            this.getFiles = function () {
                return _.sortBy(_.differenceWith(self.entries, self.getDirectories(), _.isEqual), function(o) {
                    return _.toLower(o.name);
                });
            };

            this.getParent = function () {
                return self.parent;
            };

            this.getExtension = function () {
                if (self.isDir) {
                    return null;
                }
                return self.name.substr(self.name.lastIndexOf('.') + 1);
            };

            this.addEntry = function (entry) {
                if (entry instanceof Entry && self.isDir && _.isEqual(self, entry.getParent())) {
                    self.entries.push(entry);
                    return true;
                }
                return false;
            };

            this.removeEntry = function (entry) {
                var index = [_.findIndex(self.entries, entry)];
                _.pullAt(self.entries, index);
            };
        }

        entryModel.make = function (data) {
            if (!data.name || !_.isString(data.name) || _.isEmpty(data.name)) {
                return null;
            }
            if (!(data.parent instanceof Entry)) {
                return null;
            }
            if (!data.isDir && !entryModel.checkExtension(data.name)) {
                return null;
            }
            return new Entry(data.name, data.parent, data.isDir, data.entries);
        };

        entryModel.makeRoot = function () {
            return new Entry('Root', null, true, []);
        };

        entryModel.checkExtension = function (name) {
            var index = name.lastIndexOf('.');
            if (index !== -1) {
                return _.indexOf(_.values(EXTENSIONS), name.substr(index + 1)) !== -1;
            }
            return false;
        };

        entryModel.Entry = Entry;

        return entryModel;
    }]);