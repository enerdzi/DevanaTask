angular.module('Nautalius')
    .directive('ntlsTreeView', ['Events', function (Events) {
        return {
            templateUrl: 'tree-view/ntls-tree-view.html',
            replace: true,
            restrict: 'E',
            scope: {
                rootEntry: '=',
                showFiles: '='
            },
            link: function (scope) {
                scope.view = {
                    isOpen: false
                };

                scope.toggleOpen = function () {
                    scope.view.isOpen = !scope.view.isOpen;
                    if (scope.rootEntry.isDir) {
                        scope.$emit(Events.ACTIVE_DIR_CHANGE, scope.rootEntry);
                    }
                };

                scope.showDir = function ($event) {
                    $event.stopPropagation();
                    if (scope.rootEntry.isDir) {
                        scope.$emit(Events.SHOWING_DIR_CHANGE, scope.rootEntry);
                    }
                };
            }
        };
    }]);