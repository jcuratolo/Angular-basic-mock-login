(function() {
    'use strict';
    
    function AlertsController() {
        console.log('alerts controller activated.');
    }

    AlertsController.$inject = [];

    angular
        .module('alerts')
        .controller('AlertsController', AlertsController);
})();
