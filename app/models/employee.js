var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


var employeeSchema = new Schema({
	employeename : {type:String,lowercase:true,unique:true,required:true},
	password : {type:String,required:true},
	email : {type:String,lowercase:true,unique:true,required:true}
});

employeeSchema.pre('save',function(next){
	var employee = this;
	bcrypt.hash(employee.password,null,null,function(err,hash){
		if(err) return next(err);
		employee.password = hash;
		next();
	});
});

employeeSchema.methods.comparePassword = function(password){
	return bcrypt.compareSync(password,this.password)
}


module.exports = mongoose.model('Employee',employeeSchema);
