angular.module('Nautalius', ['ngMaterial']);

angular.module('Nautalius')
    .config(['$mdIconProvider', function ($mdIconProvider) {
        $mdIconProvider
            .defaultIconSet('assets/mdi.svg')
    }]);