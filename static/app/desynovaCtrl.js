(function(){
	'use strict';
	angular.module('ctrl', [])
	.controller('DesynovaCtrl', DesynovaCtrl);

	DesynovaCtrl.$inject = ['$scope', '$timeout', '$stateParams'];

	function DesynovaCtrl($scope, $timeout, $stateParams){
		console.log('DesynovaCtrl loaded');
	}

})();
