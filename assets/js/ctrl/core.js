<!-- core.js -->


/*
App.controller('CtrlFirebase', ['$scope', '$firebase', function( $scope, $firebase ){

        var url = 'https://homeystyle.firebaseio.com'; //link to my firebase account
        var sync = $firebase(new Firebase(url)).$bind($scope, 'PhotoStorage');

}]);
*/


//this controller "photoList" controls the way the photos display
app.controller('PhotoList', ['$scope', '$routeParams', /*'$firebase'*/, function($scope, $routeParams,/*$firebase*/){ 
		
		//$scope.keyword = $routeParams;//.id? //keyword is the name of the ng-model in main.xxx
		
        var items = {};
		items.couches = function($scope) {
			$scope.keywordSearch=[
				{
					"title": 	'couch',
					"url": 	'http://www.exercisemenu.com/wp-content/uploads/2011/07/couch.jpg',
					"keyword": 	[
						'couch',
						'sofa',
						'loveseat',
						'couches',
						'living room',
					]
				},
				{
					"title": 	'couch',
					"url": 	'http://www.exercisemenu.com/wp-content/uploads/2011/07/couch.jpg',
					"keyword": 	[
						'couch',
						'sofa',
						'loveseat',
						'couches',
						'living room',
					]
				}
			]};
		
		items.lamps = function($scope) {
			$scope.keywordSearch=[
				{
					"title": 'lamp',
					"url": 	'http://cubeme.com/blog/wp-content/uploads/2010/04/Wrecking_Ball_Lamp_Studio_Job1.jpg',
					"keyword": 	[
						'lamp',
						'cool lamp',
						'lamps',
						'artsy lamp',
					]
				},
				{
					"title": 	'lamp',
					"url:" 	'http://cubeme.com/blog/wp-content/uploads/2010/04/Wrecking_Ball_Lamp_Studio_Job1.jpg',
					"keyword": 	[
						'lamp',
						'cool lamp',
						'lamps',
						'artsy lamp',
					]
				}
			]};
	
		$scope.searchPhotos = function(){ //searchPhotos is the button function in main.xxx

                for(pic in $scope.PhotoList){
                        var photo = $scope.title[pic];
                        if( photo == $scope.title ) {

                                $scope.PhotoList = photo;
                                return true;
                        }
                }
        	}
		}
			
		app.controller(items); //loads in all photos of searched furniture
}]);

//controller for detail page
app.controller('CtrlDetail', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.detailID = $routeParams.id;

}]);




/*
NEWLY ADDED CODE:
function AppCtrl ($scope) {
	$scope.setActive = function (type) {
	$scope.destinationsActive = '';
	$scope.flghtsActive = '';
	$scope.reservationsActive = '';
	
	$scope.[type + 'Active'] = 'active';
	}
}
*/












