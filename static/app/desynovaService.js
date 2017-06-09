(function(){

	angular.module('service', [])
	.factory('ApiService', ApiService);

	ApiService.$inject = ['$http'];

	function ApiService($http){

		var loginUser = {
			username: null,
			password: null
		};

		var setLoginUserDetailsRequest = function(data){
			loginUser.username = data.username;
			loginUser.password = data.password;
		};

		var getLoginUserDetailsRequest = function(){
			return loginUser;
		};

		var searchUserRequest = function(params){
			return $http.get('https://api.github.com/search/users', params).then(function(response){
				return response.data;
			}, function(error){
				return error;
			});
		};

		return {
			searchUserRequest : searchUserRequest,
			setLoginUserDetailsRequest : setLoginUserDetailsRequest,
			getLoginUserDetailsRequest : getLoginUserDetailsRequest
		};
	}

})();
