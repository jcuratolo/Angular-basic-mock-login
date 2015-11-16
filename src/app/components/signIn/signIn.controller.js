(function() {
    'use strict';

    function SignInController ($scope, $location, AuthenticationSvc) {
        $scope.user = {};
        $scope.authError = '';

        $scope.authenticate = function(user) {
            if ($scope.signInForm.$valid) {
                AuthenticationSvc
                    .authenticate(user)
                    .then(function() {
                        $scope.authError = '';
                        $location.path('/success');
                    })
                    .catch(function() {
                        $scope.authError = 'Whoops! We couldn\'t validate your information. Please try again';
                    });
            }
        };
    }

    SignInController.$inject = ['$scope', '$location', 'AuthenticationSvc'];

    angular
        .module('signIn')
        .controller('SignInController', SignInController);
})();
