(function() {
    'use strict';

    function SignUpController ($scope, $location, UserSvc) {
        function signUp() {
            if ($scope.signUpForm.$valid) {
                UserSvc
                    .create($scope.user)
                    .then(goToSuccessView);
            }
        }

        function goToSuccessView() {
            $location.path('/success');
        }

        $scope.user = {};
        $scope.signUp = signUp;
    }

    SignUpController.$inject = ['$scope', '$location', 'UserSvc'];

    angular
        .module('signUp')
        .controller('SignUpController', SignUpController);
})();
