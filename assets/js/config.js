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
		.when('/list/:listName', {
			templateUrl: 'views/listDetail.html',
			controller:  'ListDetail'	 //EachListCtrl
		})
		.when('/userHomePg', {
			//authRequired: true,
			templateUrl: 'userHomePg.html',
			controller:  'AllListsCtrl' 		
		})
		.when('/login', {
			templateUrl: 'login.html',
			controller:  'loginCtrl'		
		})
		.when('/members', {
			templateUrl: 'member.html',
			controller:  'GlobalCtrl'		
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller:  'GlobalCtrl'		
		})
		
}])










