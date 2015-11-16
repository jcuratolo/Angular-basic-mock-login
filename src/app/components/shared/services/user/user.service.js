(function() {
    'use strict';

    function UserSvc($q) {
        var svc = this;
        var users = [];

        svc.create = create;
        svc.findByUsername = findByUsername;
        svc.getUsers = getUsers;

        function getUsers() {
            return users;
        }

        function create(userInfo) {
            var newUser = {};

            if (angular.isUndefined(userInfo.username)) {
                throw new Error('Cannot create a user without a username.');
            }

            if (angular.isUndefined(userInfo.password)) {
                throw new Error('Cannot create a user without a password.');
            }

            angular.extend(newUser, userInfo);
            users.push(newUser);

            return $q.resolve(newUser);
        }

        function findByUsername(username) {
            var result;

            // Build an array of users matching the supplied username
            result = users.filter(function(user) {
                return user.username === username;
            });

            // If we found user(s), resolve with the first one found
            // Otherwise reject the result of the search
            if (result && result.length && result.length > 0) {
                return $q.resolve(result[0]);
            } else {
                return $q.reject(result);
            }
        }
    }

    UserSvc.$inject = ['$q'];

    angular
        .module('sharedComponents')
        .service('UserSvc', UserSvc);
})();
