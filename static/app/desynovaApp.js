(function () {
	'use strict';
	angular.module('DesynovaApp', ['ui.router', 'ctrl', 'service'])
	.config(AppConfig);

	AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function AppConfig($stateProvider, $urlRouterProvider){

		$stateProvider.

		state('login', {
			url: '/login',
			templateUrl: '/static/app/login/login.html',
			controller: 'LoginCtrl'
		}).

		state('landingPage', {
			url: '/landingPage',
			templateUrl: '/static/app/landingPage/landingPage.html',
			controller: 'LandingPageCtrl'
		});

		$urlRouterProvider.otherwise('/login');

	}

})();
