(function () {
    'use strict';

    angular.module('cmReviewResults')
        .controller('FinalAccessReviewResults', FinalAccessReviewResults);

    function FinalAccessReviewResults($scope){

        //vm.voteForm = {
        //    vote: undefined,
        //    rationale: ''
        //};
        //vm.positiveVote = positiveVote;
        //vm.logVote = logVote;
        //
        //function positiveVote() {
        //    vm.voteForm.rationale = '';
        //}

        $scope.alerts = [
            { type: 'danger', msg: 'Please check your vote.' },
            { type: 'success', msg: 'Vote successfully logged.' }
        ];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


        /*ACCORDION*/
        $scope.oneAtATime = false;

        /*GOOGLE CHART*/
        $scope.chartData = {
            'accessTotal': [
                ['Results', 'Votes'],
                ['YES', 3],
                ['NO', 2],
                ['Pending', 0]
            ],
            'dulTotal': [
                ['Results', 'Votes'],
                ['YES', 1],
                ['NO', 4],
                ['Pending', 0]
            ]

        };

        $scope.chartOptions = {
            'accessTotal': {
                pieHole: 0.4,
                pieSliceTextStyle: {
                    color: 'white',
                    fontSize: 18
                },
                pieSliceText: 'none',
                pieSliceBorderColor: 'transparent',
                backgroundColor: 'transparent',
                chartArea: {
                    left: 0,
                    top: 15,
                    right: 0,
                    bottom: 10,
                    width: '100%',
                    height: '85%'
                },
                height: 138,
                slices: {
                    0: {color: '#603B9B'},
                    1: {color: '#777777'},
                    2: {color: '#c9c9c9'}
                },
                legend: {
                    position: 'right',
                    textStyle: {
                        color: '#777777',
                        bold: true,
                        fontName: 'Roboto',
                        fontSize: 16
                    },
                    alignment: 'start'
                },
                tooltip: {
                    textStyle: {
                        color: '#333333',
                        fontSize: 14
                    }
                }
            },
            'dulTotal': {
                pieHole: 0.4,
                pieSliceTextStyle: {
                    color: 'white',
                    fontSize: 18
                },
                pieSliceText: 'none',
                pieSliceBorderColor: 'transparent',
                backgroundColor: 'transparent',
                chartArea: {
                    left: 0,
                    top: 15,
                    right: 0,
                    bottom: 10,
                    width: '100%',
                    height: '85%'
                },
                height: 138,
                slices: {
                    0: {color: '#C16B0C'},
                    1: {color: '#777777'},
                    2: {color: '#c9c9c9'}
                },
                legend: {
                    position: 'right',
                    textStyle: {
                        color: '#777777',
                        bold: true,
                        fontName: 'Roboto',
                        fontSize: 16
                    },
                    alignment: 'start'
                },
                tooltip: {
                    textStyle: {
                        color: '#333333',
                        fontSize: 14
                    }
                }
            }
        }
    }
})();
