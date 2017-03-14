'use strict';

// Declare app level module which depends on views, and components
angular.module('gsApp', [
  'ngRoute',
  'ngMessages',
  'ngAnimate',
  'ngMaterial',
  'ui.bootstrap',
  'gsApp.view1',
  'gsApp.view2',
  'gsApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
