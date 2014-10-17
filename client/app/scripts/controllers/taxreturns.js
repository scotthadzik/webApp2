'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FiletransferCtrl
 * @description
 * # FiletransferCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('TaxReturnsCtrl', function ($scope, $location, $anchorScroll) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'SitePoint'
        ];
        $scope.scrollTo = function(id) {
            $location.hash(id);
            console.log($location.hash());
            $anchorScroll();
        };

    });

$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});

//var navList = angular.module('navList', []);
//
//navList.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
//
//}]);
