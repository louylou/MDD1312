<!-- config.js -->

var app = angular.module('appCore', [])
.config(['$routeProvider',function(r){

	r
		.when('/',{
			templateUrl : 'assets/views/main.xxx',
		})
		.when('/detail/:id', {
			templateUrl : 'assets/views/detail.xxx',
		})

}])

// put $scope.apiKey in this file
//  put $scope.appId 
//results function
// success function