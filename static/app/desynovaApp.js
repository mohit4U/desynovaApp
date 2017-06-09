(function () {
	'use strict';
	angular.module('DesynovaApp', ['ui.router', 'ctrl', 'service'])
	.config(AppConfig);

	AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	CheckLogin.$inject = ['$q', 'ApiService'];

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
			controller: 'LandingPageCtrl',
			resolve: {
				isLoggin: CheckLogin
			}
		});

		$urlRouterProvider.otherwise('/login');

	}

	function CheckLogin($q, ApiService){
		var promise = $q.defer();
		if(ApiService.getLoginUserDetailsRequest().username && ApiService.getLoginUserDetailsRequest().password){
			return promise.resolve();
		}else{
			window.location.href = '/';
			return promise.reject();
		}
		return promise;
	}

})();
