angular.module('Nautalius')
    .directive('ntlsContentView', ['EntryModel', function (EntryModel) {
        return {
            templateUrl: 'content-view/ntls-content-view.html',
            restrict: 'E',
            scope: {
                rootEntry: '='
            },
            link: function (scope) {
                scope.showDir = function () {
                    if (scope.rootEntry.isDir) {
                        scope.$emit('SHOWING_DIR_CHANGE', scope.rootEntry);
                    }
                };
            }
        };
    }]);