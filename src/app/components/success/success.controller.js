(function() {
    'use strict';

    function SuccessController ($scope, UserSvc) {
        $scope.getUsers = UserSvc.getUsers;
    }

    SuccessController.$inject = ['$scope', 'UserSvc'];

    angular
        .module('success')
        .controller('SuccessController', SuccessController);
})();
