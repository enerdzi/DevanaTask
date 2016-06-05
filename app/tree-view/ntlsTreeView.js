angular.module('Nautalius')
    .directive('ntlsTreeView', ['EntryModel', function (EntryModel) {
        return {
            templateUrl: 'tree-view/ntls-tree-view.html',
            replace: true,
            restrict: 'E',
            scope: {
                rootEntry: '='
            },
            link: function (scope) {
                console.log(scope.rootEntry);
            }
        };
    }]);