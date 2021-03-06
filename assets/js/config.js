<!-- config.js -->

var app = angular.module('homeyApp', ['ngRoute','firebase']) 
.config(['$routeProvider',function(r){

	r
		.when('/',{ 
			templateUrl : 'views/main.xxx',
		})
		.when('/allLists', {
			templateUrl: 'views/allLists.html',
			controller:  'AllListsCtrl'	
		})
		.when('/list/:listName', {
			templateUrl: 'views/listDetail.html',
			controller:  'ListDetail'	 
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller:  'loginCtrl'		
		})
		.when('/members', {
			templateUrl: 'views/member.html',
			controller:  'MembersCtrl'		
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller:  'GlobalCtrl'		
		})
		.when('/terms', {
			templateUrl: 'views/terms.html',
			controller:  'GlobalCtrl'		
		})
		
}])










