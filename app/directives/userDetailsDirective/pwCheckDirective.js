"use strict";

angular.module('validationModule').directive('pwCheck', [function () {
    return {
        require: 'ngModel',
        restrict: "A",
        link: function ($scope, elem, attrs, model) {

            $scope.$watch(attrs.pwCheck, function (value) {
                //check if the password match
                if (model.$viewValue !== undefined && model.$viewValue !== '') {
                    model.$setValidity('pwCheck', value === model.$viewValue);
                }
            });

            model.$parsers.push(function (value) {
                var isValid = value === $scope.$eval(attrs.pwCheck);
                model.$setValidity('pwCheck', isValid);
                return isValid ? value : undefined;
            });             
        }
    };
}]);
