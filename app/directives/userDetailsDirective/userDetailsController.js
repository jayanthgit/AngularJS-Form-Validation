"use strict";

function controllerFunction($scope, dataService) {

    //save all user information in this object for submitting
    $scope.user = {};

    var countries = dataService.getListOfCountries();
    var industries = dataService.getListOfIndustries();

    $scope.countries = countries;
    $scope.industries = industries;

    var isUSASelected = false;
    $scope.updateStates = function () {
        if ($scope.user.selectedCountry === 'USA') {
            $scope.states = dataService.getListOfUSAStates();
            isUSASelected = true;
        }
        else {
            $scope.states = [];
            isUSASelected = false;
        }
    };
        
    $scope.isStateSelectionRequired = function () {
        return isUSASelected;
    };

    $scope.submitForm = function () {
        var data = "";

        //for testing only...

        // everything valid - time to submit
        if ($scope.userDetailsForm.$valid) {
            for (var key in $scope.user) {
                data += key + ": " + $scope.user[key] + '\n';
            }
            alert(data);
        }
    };
};

angular.module('validationModule').controller('validationModuleController', ['$scope', 'dataService',
    controllerFunction]);
