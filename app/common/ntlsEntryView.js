angular.module('Nautalius')
    .directive('ntlsEntryView', ['EntryModel', function (EntryModel) {
        return {
            templateUrl: 'common/ntls-entry-view.html',
            replace: true,
            restrict: 'E',
            scope: {
                entry: '='
            },
            link: function (scope) {
                
            }
        };
    }]);