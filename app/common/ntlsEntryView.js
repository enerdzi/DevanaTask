angular.module('Nautalius')
    .directive('ntlsEntryView', ['Modals', 'EntryService', 'Events', function (Modals, EntryService, Events) {
        return {
            templateUrl: function (elem, attrs) {
                if (attrs.mode === 'list') {
                    return 'common/ntls-entry-view.html';
                } else {
                    return 'common/ntls-entry-view-grid.html';
                }
            },
            restrict: 'E',
            scope: {
                entry: '=',
                view: '='
            },
            link: function (scope) {
                scope.iconsMap = {
                    html: 'language-html5',
                    css: 'language-css3',
                    js: 'nodejs',
                    php: 'language-php'
                };

                scope.showDeleteConfirm = function ($event) {
                    $event.stopPropagation();
                    Modals.showDeleteEntryConfirm().then(function () {
                        EntryService.deleteEntry(scope.entry);
                        if (scope.entry.isDir) {
                            scope.$emit(Events.DIR_DELETED, scope.entry);
                        }
                    });
                };

                scope.showRenamePrompt = function ($event, renameFailed) {
                    $event.stopPropagation();
                    Modals.showRenameEntryPrompt(scope.entry.name, renameFailed).then(function (newName) {
                        if (_.isEmpty(newName) || !EntryService.renameEntry(scope.entry, newName)) {
                            scope.showRenamePrompt($event, true);
                        }
                    });
                };

                scope.isEntryRoot = function () {
                    return _.isEqual(scope.entry, EntryService.getRootEntry());
                };
            }
        };
    }]);