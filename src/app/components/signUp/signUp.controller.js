(function() {
    'use strict';

    function SignUpController () {}

    SignUpController.$inject = [];

    angular
        .module('signUp')
        .controller('SignUpController', SignUpController);

        angular
            .module('signUp')
            .directive('usernameInput', function() {
                return {
                    templateUrl: 'app/components/signUp/usernameInput.html'
                };
            });
})();
