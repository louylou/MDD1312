<!-- config.js -->

var app = angular.module('homeyApp', ['ngRoute']) //, 'firebase'
.config(['$routeProvider',function(r){

	r
		.when('/',{
			controller: 'PhotoList', //idk if items is right?
			templateUrl : 'views/main.xxx',
		})
		.when('/detail/:id', {
			templateUrl : 'views/detail.xxx',
			//controller:
		})

}])

/* NEWLY ADDED CODE:
angular.module('airline', ['airlineServices', 'airlineFilters'])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/destinations.html',
	controller: 'DestinationsCtrl'})
	.when('/airports/:airportCode', {
	templateUrl: 'partials/airport.html',
	controller: 'AirportCtrl'
	})
	.when('/flights', {
	templateUrl:'partials/flights.html',
	controller: 'FlightsCtrl'})
	.when('/reservations', {templateUrl:'partials/reservations.html',
	controller: 'ReservationsCtrl'}) //calling the .js file in the js/ctrl folder
	;
}
angular.module('airlineFilters', [])
.filter('originTitle', function () {
	return function(input) {
		return input.origin + ' - ' + input.originFullName;
	};
})
.filter('destinationTitle', function () {
	return function(input) {
		return input.destination + ' - ' + input.destinationFullName; //returning the output you want to display
	};
});

	
*/



