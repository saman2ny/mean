angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider,$locationProvider){
	
	$routeProvider
	.when('/',{
		templateUrl : 'app/views/pages/home.html'
	})
	.when('/about',{
		templateUrl : 'app/views/pages/about.html'
	})

	.when('/register',{
		templateUrl : 'app/views/pages/employees/register.html',
		controller : 'regCtrl',
		controllerAs : 'register'
	})

	.when('/login',{
		templateUrl : 'app/views/pages/employees/login.html'
		//controller : 'mainCtrl',
		//controllerAs : 'mainCtrl'
	})

	.otherwise({ redirectTo:'/'});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

});