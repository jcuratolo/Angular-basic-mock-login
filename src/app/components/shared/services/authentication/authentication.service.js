(function() {
    'use strict';

    function AuthenticationSvc($q, UserSvc) {
        var svc = this;

        svc.authenticate = authenticate;

        function authenticate(user) {
            if (angular.isUndefined(user.username)) {
                throw new Error('Cannot authenticate a user without a username');
            }

            if (angular.isUndefined(user.password)) {
                throw new Error('Cannot authenticate a user without a password');
            }

            return (
                UserSvc

                    // See if there is a user matching the given credentials
                    .findByUsername(user.username)

                    // Given credentials matched a known user
                    // Set their status to authenticated
                    // Otherwise return a rejected promise
                    .then(function(foundUser) {
                        if (foundUser.password === user.password) {
                            foundUser.status = 'authenticated';
                            return foundUser;
                        } else {
                            return $q.reject(user);
                        }
                    })
            );
        }
    }

    AuthenticationSvc.$inject = ['$q','UserSvc'];

    angular
        .module('sharedComponents')
        .service('AuthenticationSvc', AuthenticationSvc);
})();
