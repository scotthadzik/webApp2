'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
     $scope.todos = ['Item 1', 'Item 2', 'Item 3'];


        /**
         * Monthly Expense Pie Chart
         */
        $(function () {

            $(document).ready(function () {

                // Build the chart
                $('#MonthlyExpenses').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: 'Monthly Expenses'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Expense',
                        data: [
                            ['Advertising',   9050],
                            ['Bank Service Charges',  154],
                            ['Car/Truck Expenses',    1051.72],
                            ['Computer Supplies',     2350],
                            ['Insurance',   31455]
                        ]
                    }]
                });
            });

        });


  });

