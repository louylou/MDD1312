<!-- config.js -->

var app = angular.module('homeyApp', ['ngRoute','firebase']) 
.config(['$routeProvider',function(r){

	r
		.when('/',{
			//controller: 
			templateUrl : 'views/main.xxx',
		})
		.when('/detail', {
			templateUrl : 'views/detail.xxx',
			controller: 'addListCtrl' 
		})
		.when('/allLists', {
			templateUrl: 'allLists.html',
			controller:  'AllListsCtrl'	
		})
		.when('/eachList', {
			templateUrl: 'eachList.html',
			controller:  'AllListsCtrl'	 //EachListCtrl
		})
		//VVV not working?
		.when('/userHomePg', {
			templateUrl: 'userHomePg.html',
			controller:  'AllListsCtrl'		
		})

}])










