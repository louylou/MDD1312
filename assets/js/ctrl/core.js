<!-- core.js -->

//core shared controller
app.controller('CtrlCore', ['$scope', function($scope){ //changed CtrlCore to the name of your app ex: DreamJobApp

	$scope.title = "MyDreamJob";

}]);

//controller for detail page
app.controller('CtrlDetail', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.detailID = $routeParams.id;

}]);