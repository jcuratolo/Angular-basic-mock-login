(function() {
    'use strict';

    function bsFormGroup() {
        return {
            template: '<div class="form-group" ng-class="{\'has-error\': for.$invalid && for.$dirty, \'has-success\': for.$valid && for.$dirty}" ng-transclude></div>',
            transclude: true,
            scope: {
                for: '='
            }
        };
    }

    angular
        .module('sharedComponents')
        .directive('bsFormGroup', bsFormGroup);
})();
