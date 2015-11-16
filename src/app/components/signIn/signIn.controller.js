(function() {
    'use strict';

    function SignInController ($scope, $location, AuthenticationSvc) {
        $scope.user = {};

        $scope.authenticate = function(user) {
            if ($scope.signInForm.$valid) {
                AuthenticationSvc
                    .authenticate(user)
                    .then(function() {
                        $location.path('/success');
                    });
            }
        };
    }

    SignInController.$inject = ['$scope', '$location', 'AuthenticationSvc'];

    angular
        .module('signIn')
        .controller('SignInController', SignInController);
})();
