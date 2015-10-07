(function () {
    'use strict';

    angular.module('cmReviewedCases')
        .controller('ReviewedCases', ReviewedCases);

    /* ngInject */
    function ReviewedCases(reviewedConsents, reviewedDRs, $scope, $http) {

        $scope.rps = []; //declare an empty array
        $http.get("json/cm_rp_reviewed_cases.json").success(function(response){
            $scope.rps = response;  //ajax request to fetch data into $scope.data
        });

        var vm = this;
        vm.electionsList = {'dul': [], 'access': []};

        init();

        function init() {
            vm.electionsList['dul'] = transformElectionResultData(reviewedConsents);
            vm.electionsList['access'] = transformElectionResultData(reviewedDRs);
        }
    }

    // We need to transform the result data to a string to be able to filter results
    function transformElectionResultData(collection){
        var dup_array = collection.slice();
        for (var i = 0; i < dup_array.length; i++) {
            if(dup_array[i].finalVote === true){
                dup_array[i].finalVoteString = 'Yes';
            }else{
                dup_array[i].finalVoteString = 'No';
            }
        }
        return dup_array;
    }

})();
