var Hubadata = angular.module('Hubadata', ['ui.router']);

Hubadata.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.state('app', {
			url: '/app',
			templateUrl: 'templates/app.html',
			controller: 'appCtrl'
		})
		.state('partnership', {
			url: '/partnership',
			templateUrl: 'templates/partnership.html',
			controller: 'partnershipCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		});
}]);