/*
angular.module('airlineServices', ['ngResource'])//ngResource is a file you download under "extra" when downloading bootstrap
	.factory('Airport', function($resource) {
		return $resource ('/airports/:airportCode');

	})
	.factory('Flights', function ($resource) { //this code is for the search element
		return $resouce('/flights');
	
	})
	.factory('Reservations', function ($resource) { //this code is for the search element
		return $resouce('/reservations');
	
	});


*/