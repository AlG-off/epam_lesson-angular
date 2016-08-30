var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'pages/homepage.html',
		controller : 'Homepage'
	})
	.when('/about',{
		templateUrl : 'pages/about.html',
		controller : 'About'
	})
});