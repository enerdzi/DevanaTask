angular.module('Nautalius')
    .directive('ntlsTreeView', ['EntryModel', function (EntryModel) {
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
                    isOpen: false,
                    showFiles: scope.showFiles
                };
                scope.toggleOpen = function () {
                    scope.view.isOpen = !scope.view.isOpen;
                };
            }
        };
    }]);