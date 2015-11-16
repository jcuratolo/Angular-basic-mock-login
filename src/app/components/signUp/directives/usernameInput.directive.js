(function() {
    'use strict';

    function usernameInput() {
        return {
            templateUrl: 'app/components/signUp/directives/usernameInput.template.html'
        };
    }

    angular
        .module('signUp')
        .directive('usernameInput', usernameInput);
})();
