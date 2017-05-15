angular.module('employeeService',[])

.factory('employee',function($http){

	employeeFactory = {};
	//employee.create(regData);
	employeeFactory.create = function(regData){
		return $http.post('/api/employee',regData);
	};
	
	return employeeFactory;

});