(function() {
    'use strict';

    function successRouteConfig($routeProvider) {
        $routeProvider.when('/success', {
            templateUrl: 'app/components/success/success.view.html',
            controller: 'SuccessController'
        });
    }

    successRouteConfig.$inject = ['$routeProvider'];

    angular
        .module('success')
        .config(successRouteConfig);
})();
