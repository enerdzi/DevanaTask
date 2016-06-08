angular.module('Nautalius')
    .factory('Modals', ['$mdDialog', function ($mdDialog) {
        var service = {};

        service.showConfirm = function (title) {
            var confirm = $mdDialog.confirm()
                .title(title)
                .ok('Yes')
                .cancel('No');

            return $mdDialog.show(confirm);
        };

        service.showPrompt = function (title, text, okButton, value) {
            console.log($mdDialog.prompt());
            var confirm = $mdDialog.prompt()
                .title(title)
                .textContent(text)
                .placeholder(value)
                .ok(okButton)
                .cancel('Cancel');

            return $mdDialog.show(confirm);
        };

        service.showDeleteEntryConfirm = function () {
            return service.showConfirm('Would you like to delete this entry?');
        };
        
        service.showRenameEntryPrompt = function (currentName, renameFailed) {
            var text = '';
            if (renameFailed) {
                text = 'Couldn\'t rename, try again';
            }
            return service.showPrompt('Rename entry', text, 'Rename', currentName);  
        };

        return service;
    }]);