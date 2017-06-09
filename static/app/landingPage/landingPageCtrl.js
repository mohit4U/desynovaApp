(function(){
	'use strict';
	angular.module('ctrl')
	.controller('LandingPageCtrl', LandingPageCtrl);

	LandingPageCtrl.$inject = ['$scope', '$timeout', '$stateParams', 'ApiService', '$state'];

	function LandingPageCtrl($scope, $timeout, $stateParams, ApiService, $state){
		console.log('LandingPageCtrl loaded');

		$scope.searchString = null;
		$scope.loginUser = null;

		var config = {
			params: {
				q: null
			}
		};

		$scope.searchResponse = {};

		$timeout(function(){
			$scope.loginUser = ApiService.getLoginUserDetailsRequest();
			if(!$scope.loginUser.username || !$scope.loginUser.password){
				$state.go('login');
			}
		});

		$scope.searchUser = function(){
			if($scope.searchString){
				config.params.q = $scope.searchString;
				ApiService.searchUserRequest(config).then(function(response){
					console.log('$scope.searchUser response ', response);
					$scope.searchResponse = response;
				}, function(error){
					console.log('$scope.searchUser error ', error);
				});
			}else{
				console.log('empty string !!!');
			}
		};
	}

})();
