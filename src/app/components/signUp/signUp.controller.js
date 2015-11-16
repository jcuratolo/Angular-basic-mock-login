(function() {
    'use strict';

    function SignUpController ($scope, $location) {
        function signUp() {
            if ($scope.signUpForm.$valid) {
                $location.path('/success');
            }
        }

        $scope.user = {};
        $scope.signUp = signUp;
    }

    SignUpController.$inject = ['$scope', '$location'];

    angular
        .module('signUp')
        .controller('SignUpController', SignUpController);
})();
