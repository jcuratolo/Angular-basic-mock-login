(function() {
    'use strict';

    function SignUpController ($scope) {
        $scope.user = {};
    }

    SignUpController.$inject = ['$scope'];

    angular
        .module('signUp')
        .controller('SignUpController', SignUpController);
})();
