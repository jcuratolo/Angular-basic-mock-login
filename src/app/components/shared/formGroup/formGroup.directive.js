(function() {
    'use strict';

    function bsFormGroup() {
        return {
            template: '<div class="form-group" ng-class="{\'has-error\': for.$invalid && form.$dirty, \'has-success\': for.$valid && form.$dirty}" ng-transclude></div>',
            transclude: true,
            scope: {
                for: '=',
                form: '='
            }
        };
    }

    angular
        .module('sharedComponents')
        .directive('bsFormGroup', bsFormGroup);
})();
