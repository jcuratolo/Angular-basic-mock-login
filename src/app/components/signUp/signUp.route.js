(function() {
    'use strict';

    function signUpRouteConfig($routeProvider) {
        $routeProvider.when('/signUp', {
            templateUrl: 'app/components/signUp/signUp.view.html',
            controller: 'SignUpController'
        });
    }

    signUpRouteConfig.$inject = ['$routeProvider'];

    angular
        .module('signUp')
        .config(signUpRouteConfig);
})();
