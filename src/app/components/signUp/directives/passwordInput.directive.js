(function() {
    angular
        .module('signUp')
        .directive('passwordInput', function() {
            return {
                templateUrl: 'app/components/signUp/directives/passwordInput.template.html'
            };
        });
})();
