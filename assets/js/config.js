<!-- config.js -->

var app = angular.module('homeyApp', ['ngRoute','firebase']) 
.config(['$routeProvider',function(r){

	r
		.when('/',{
			//controller: 'PhotoList', //idk if items is right?
			templateUrl : 'views/main.xxx',
		})
		.when('/detail', {
			templateUrl : 'views/detail.xxx',
			controller: 'addListCtrl' //addPhotoCtrl
		})
		.when('/allLists', {
		templateUrl: 'allLists.html',
		controller:  'AllListsCtrl'	
		})

}])










