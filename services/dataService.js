angular.module('validationModule').factory("dataService", ['$rootScope', function ($rootScope) {

    //in a real world, this would be a ajax call
    //that would return a promise or fire an event when data is ready
    function getListOfCountries() {
        return ['France', 'Germany', 'USA', 'India', 'Russia', 'Canada', 'China'];
    };

    function getListOfUSAStates(country) {
        return ['California', 'Washington', 'Oregon'];
    };

    function getListOfIndustries() {
        return ['Banking', 'Manufacturing', 'Software Services'];
    };

    return {
        getListOfCountries: getListOfCountries,
        getListOfUSAStates: getListOfUSAStates,
        getListOfIndustries: getListOfIndustries
    };
}
]);