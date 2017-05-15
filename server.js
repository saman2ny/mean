var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRouters = require('./app/routes/api')(router);
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); 
app.use('/api',appRouters);

mongoose.connect('mongodb://localhost:27017/vivek-4',function(err){
	if(err){console.log('not connectd with mongodb');}
	else{console.log('connectd with mongodb');}
	
});

app.get('*',function(req,res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});


app.listen(port,function(){
	console.log('connected with port 8080');
});

