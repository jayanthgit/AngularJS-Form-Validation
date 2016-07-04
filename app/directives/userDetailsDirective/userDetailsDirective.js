"use strict";

angular.module('validationModule').directive('userDetails', [function () {
    return {
        restrict: "E",
        controller: 'validationModuleController',
        templateUrl: 'app/directives/userDetailsDirective/userDetailsForm.html'
    };
}]);