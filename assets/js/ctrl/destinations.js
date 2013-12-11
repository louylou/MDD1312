function DestinationsCtrl ($scope, Airport) {//Airport is from the services.js
	$scope.setActive('destinations');
	
	$scope.sidebarURL = 'partials/airport.html';
	$scope.currentAirport = null;

	$scope.setAirport = function (code) { //code stands for each airport "code"
	$scope.currentAirport = Airport.get({airportCode: code}); 
	};
	
	$scope.airports = Airport.query(); //going to the server and returning all the data
}