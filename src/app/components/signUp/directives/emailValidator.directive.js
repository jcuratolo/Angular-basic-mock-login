/**
 * Attribute directive used for email validation.
 */
(function (angular) {
    'use strict';

    function jcEmail() {
        // Modified version of:
        // http://stackoverflow.com/questions/23671934/form-validation-email-validation-not-working-as-expected-in-angularjs
        function link(scope, elem, attrs, ctrl) {
            if (!ctrl) {
                return false;
            }

            function isValidEmail(value) {
                if (!value) {
                    return false;
                }
                // Email Regex used by ASP.Net MVC
                var regex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/i;
                return regex.exec(value) != null;
            }

            ctrl.$validators.email = function (modelValue, viewValue) {
                return isValidEmail(viewValue);
            };
        }

        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };
    }

    angular
        .module('signUp')
        .directive('jcEmail', jcEmail);
}(angular));
