function AirportCtrl ($scope, $routeParams, Airport) { //this ctrl is called in the config.js
	
	$scope.currentAirport = airport.get({
		
		airportCode: $routeParams.airportCode //the 1st airportCode in this line matches with the airportCode in services.js on the $resource line
	
	}); //going to look up the airports by using the airport codes

}

