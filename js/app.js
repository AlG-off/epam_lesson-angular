var app = angular.module('app',['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'pages/Homepage.html',
		controller : 'HomepageCtrl'
	})
	.when('/about',{
		templateUrl : 'pages/about.html',
		controller : 'AboutCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
