angular.module('Nautalius')
    .directive('ntlsContentView', ['Events', function (Events) {
        return {
            templateUrl: 'content-view/ntls-content-view.html',
            restrict: 'E',
            scope: {
                rootEntry: '='
            },
            link: function (scope) {
                scope.view = {
                    isOpen: false
                };

                scope.showDir = function (entry) {
                    if (entry.isDir) {
                        scope.$emit(Events.SHOWING_DIR_CHANGE, entry);
                    }
                };
            }
        };
    }]);