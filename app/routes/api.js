
var Employee = require('../models/employee');

module.exports = function(router){
	router.post('/employee',function(req,res){
		var employee = new Employee();
		employee.employeename = req.body.employeename;
		employee.password = req.body.password;
		employee.email = req.body.email;
		if(req.body.employeename == "" || req.body.employeename == null || req.body.password == "" || req.body.password == null || req.body.email == "" || req.body.email == null)
		{
			//res.send('validation:please  fill all fields');	
			res.json({success:false,message:'validation:please  fill all fields'});	
		}else{
			employee.save(function(err){
				if(err){
					res.json({success:false,message:'already exists'});						
				}else{
					res.json({success:true,message:'saved successfully'});				
				}
			});
		}
		//res.send('Inserted successfully');
	});
	
	
	router.post('/authenticate',function(req,res){
		Employee.findOne({employeename:req.body.employeename}).select("email employeename password").exec(function(err,employee){
			if(err) throw err
			if(!employee){
				res.json({success:false,message:'couldnot auntheticate employee'});
			}else if(employee){
				if(req.body.password){
					//res.json({success:true,message:'saved successfully'});	
					var validPassword = employee.comparePassword(req.body.password)
				}else{
					res.json({success:false,message:'password provided'});
				}
				var validPassword = employee.comparePassword(req.body.password)
				if(!validPassword){
					console.log('in');
					res.json({success:false,message:'couldnot auntheticate password'});
				}else{
					console.log('out');
					res.json({success:true,message:'employee auntheticated'});
				} 
			}
		});
	});
	
	
	
	
	return router;	
}