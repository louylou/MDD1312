<!-- core.js -->

//MydreamJob shared controller
app.controller('CtrlHome', ['$scope', function($scope){ 

	$scope.title = "Homey";

}]);

//controller for detail page
app.controller('CtrlDetail', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.detailID = $routeParams.id;

}]);