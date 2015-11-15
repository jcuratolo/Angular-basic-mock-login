(function() {
    'use strict';

    function signUpConfig($routeProvider) {
        $routeProvider.when('signUp', {
            templateUrl: 'js/components/signUp/signUp.view.html',
            controller: 'SignUpController'
        });
    }

    angular
        .module('signUp')
        .config(signUpConfig);
})();
