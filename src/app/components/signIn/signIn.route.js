(function() {
    'use strict';

    function signInRouteConfig($routeProvider) {
        $routeProvider.when('/signIn', {
            templateUrl: 'app/components/signIn/signIn.view.html',
            controller: 'SignInController'
        });
    }

    signInRouteConfig.$inject = ['$routeProvider'];

    angular
        .module('signIn')
        .config(signInRouteConfig);
})();
