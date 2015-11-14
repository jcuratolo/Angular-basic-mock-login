(function() {
    'use strict';

    function alertRoute($routeProvider) {
        $routeProvider.when('alerts', {
            controller: 'AlertsController',
            templateUrl: './js/components/alerts/alerts.view.html'
        });
    }

    alertRoute.$inject = ['$routeProvider'];

    angular
        .module('alerts')
        .config(alertRoute);
})();
