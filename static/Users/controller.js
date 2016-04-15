var User = require('./model');

var list = function(req, res){
	User.find({}, {_id:0, __v:0, password:0}, function (err, users){
		res.status(200).json({users: users});
	});
}

var insert = function(req, res){
    var username = data.username;
    var email = data.email;
    var password = data.password;
    
    var user = new User({username: username, email: email, password: password });
    user.save(); 
}

var mock = function(req, res){
	var user = new User({ username: "leandro", email: "leandroramos.crz@gmail.com", "password": "123456" });
	user.save();
}

var login = function(req, res){
	var email = req.params.email;
	var password = req.params.password;
    
	User.find({email: email, password: password}, {_id:0, __v:0}, function (err, user){
        if(user.length == 0) {
            res.status(200).json({login: "failure"});   
        } else {
            res.status(200).json({login: "success"}); 
        	
        }
		
	});
}

var register = function(req, res){
    var username = req.params.username;
	var email = req.params.email;
	var password = req.params.password;
    
	User.find({email: email, username: username}, {_id:0, __v:0}, function (err, user){
        if(user.length == 0) {
             
            var user = new User({ username: username, email: email, password: password });
	        user.save(); 
            res.status(200).json({register: "success"});
            
        } else {
           res.status(200).json({register: "user exist"}); 
        }
		
	});
}

exports.list = list;
exports.insert = insert;
exports.mock = mock;
exports.login = login;
exports.register = register;