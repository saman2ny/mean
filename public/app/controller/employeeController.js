angular.module('employeeController',['employeeService'])

.controller('regCtrl',function($http,$location,$timeout,employee){
	var app = this;
	this.regEmployee = function(regData)
	{
		app.errorMsg = false;
		employee.create(app.regData).then(function(data){
			console.log(data.data.message);
			if(data.data.success){
				app.successMsg = data.data.message;
				$timeout(function(){
					$location.path('/');
				},2000);
			}else{
				app.errorMsg = data.data.message;
			}
		});
	}
});

