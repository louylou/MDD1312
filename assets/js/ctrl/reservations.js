function ReservationsCtrl ($scope, Reservations) {
	$scope.setActive('reservations');
	
	$scope.reservations = Reservations.query();
	$scope.flights = Flights.query();
	
	$scope.reserveFlight = function () { //calling from the reservations.html
		Reservations.save($scope.reserve, function (data) {
			$scope.reserve.origin = '';
			$scope.reserve.destination = '';
			
			$scope.reservations.push(data);//this will add the data to our reservation array
		});
	}
	
}