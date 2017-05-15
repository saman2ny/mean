angular.module('authervices',[])

.factory('Auth',function($http){

	var authFactory = {};

	authFactory.login = function(regData){
		return $http.post('/api/employee',regData);
	};
	
	return authFactory;

});