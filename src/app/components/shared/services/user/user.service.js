(function() {
    'use strict';

    function UserSvc($q) {
        var svc = this;
        var users = [];

        svc.create = create;
        svc.find = find;
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

            result = users.filter(function(user) {
                return user.username === username;
            });

            return result;
        }
    }

    UserSvc.$inject = ['$q'];

    angular
        .module('sharedComponents')
        .service('UserSvc', UserSvc);
})();
