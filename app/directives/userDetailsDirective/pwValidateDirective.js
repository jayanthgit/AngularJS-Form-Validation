"use strict";

angular.module('validationModule').directive('pwValidate', [function () {
    return {
        require: 'ngModel',
        restrict: "A",
        link: function ($scope, elem, attrs, model) {

            model.$parsers.unshift(function (viewValue) {

                //password check requirement 
                //1 uppercase, 1 lowercase, 1 special character and at least 8 characters

                // atlease one uppercase letter
                var pwdHasLetterUppercase = (viewValue && /[A-Z]/.test(viewValue)) ? 'valid' : undefined;

                // atlease one lowercase letter
                var pwdHasLetterLowercase = (viewValue && /[a-z]/.test(viewValue)) ? 'valid' : undefined;

                // atlease one lowercase letter
                var pwdHasSpecialChar = (viewValue && /[^a-zA-Z0-9]/.test(viewValue)) ? 'valid' : undefined;

                //atleast 8 chars long
                var pwdValidLength = (viewValue && viewValue.length >= 8 ? 'valid' : undefined);
               
                if (pwdHasLetterUppercase && pwdHasLetterLowercase && pwdHasSpecialChar && pwdValidLength) {
                    model.$setValidity('pwValidate', true);
                    return viewValue;
                } else {
                    model.$setValidity('pwValidate', false);
                    return undefined;
                }

            });
        }
    };
}]);
