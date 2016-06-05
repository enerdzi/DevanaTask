angular.module('Nautalius')
    .directive('ntlsEntryView', ['EntryModel', function (EntryModel) {
        return {
            templateUrl: 'common/ntls-entry-view.html',
            replace: true,
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
            }
        };
    }]);