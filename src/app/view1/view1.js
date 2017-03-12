'use strict';

angular.module('gsApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller : 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function($timeout, $q, $scope, $mdDialog, $mdSidenav, $log) {


    }]);



