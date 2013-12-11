function FlightsCtrl ($scope, Flights) { //Flights is from services.js 
	$scope.setActive('flights');
	$scope.flights = Flights.query();
}

/* idk if this VVVV should be in the file?
$scope.airports = {

	"PDX" {
		"code": "PDX",
		"name":"Portland International Airport",
		"city": "portland",
		"destinations": [
			"STL",
			"MCI"
		]
	},
	"STL" {
		"code": "STL",
		"name":"Lambert-St. Louis International Airport",
		"city": "St. Louis",
		"destinations": [
			"PDX",
			"MCI"
		]
	}
}

$scope.formURL= 'partials/form.html';

$scope.editAirport = function (code) {
$scope.editing = $scope.airports[code];
*/