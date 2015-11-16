(function() {
    'use strict';

    function emailInput() {
        return {
            templateUrl: 'app/components/signUp/directives/emailInput.template.html'
        };
    }

    angular
        .module('signUp')
        .directive('emailInput', emailInput);
})();
