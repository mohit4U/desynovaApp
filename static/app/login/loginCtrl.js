(function(){
	'use strict';
	angular.module('ctrl')
	.controller('LoginCtrl', LoginCtrl);

	LoginCtrl.$inject = ['$scope', '$timeout', '$stateParams', '$state', 'ApiService'];

	function LoginCtrl($scope, $timeout, $stateParams, $state, ApiService){
		console.log('LoginCtrl loaded');

		$scope.loginUser = {
			username: null,
			password: null
		};

		$scope.login = function(){
			if($scope.loginUser.username && $scope.loginUser.password){
				ApiService.setLoginUserDetailsRequest($scope.loginUser);
				$state.go('landingPage');
			}else{
				alert('Fill all fields !!!');
			}
		};

	}

})();
