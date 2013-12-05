<!-- config.js -->

var app = angular.module('homeyApp', ['ngRoute']) //firebase
.config(['$routeProvider',function(r){

	r
		.when('/',{
			templateUrl : 'views/main.xxx',
		})
		.when('/detail/:id', {
			templateUrl : 'views/detail.xxx',
		})

}])


var photoDatabase = 
{
	
	PhotoList: 	[
		{
			title: 	'Couch',
			url: 	'http://www.exercisemenu.com/wp-content/uploads/2011/07/couch.jpg',
			keyword: 	[
				'couch',
				'sofa',
				'loveseat',
				'couches',
				'living room',
			]
		},
		{
			title: 	'Lamp',
			url: 	'http://cubeme.com/blog/wp-content/uploads/2010/04/Wrecking_Ball_Lamp_Studio_Job1.jpg',
			keyword: 	[
				'lamp',
				'cool lamp',
				'lamps',
				'artsy lamp',
			]
		},
		{
			title: 	'Table',
			url: 	'http://st.houzz.com/simgs/b39120ae0df28bda_4-8092/eclectic-coffee-tables.jpg',
			keyword: 	[
				'table',
				'coffee table',
				'tables',
				'low table',
				'cool table',
			]
		},
	]
}

new firebase('https://homeystyle.firebaseio.com').bind('$scope', 'PhotoList');

$scope.PhotoList = fbDatabase.PhotoList;

$scope.PhotoList.add(
		{
			title: 		'',
			url: 		'',
			keyword: 	[
				'',
				'',
				'',
			]
		}
)

console.log("title", fbDatabase.myDreamJob.JobTitle)