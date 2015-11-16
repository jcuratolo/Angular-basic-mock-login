(function() {
    'use strict';

    function SuccessController ($scope) {}

    SuccessController.$inject = ['$scope'];

    angular
        .module('success')
        .controller('SuccessController', SuccessController);
})();
