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
    
    res.status(200).json({status: "ok"});
}

var login = function(req, res){
	var email = req.params.email;
	var password = req.params.password;
    
    console.log(email);
    console.log(password);
    
	User.find({email: email, password: password}, {_id:0, __v:0}, function (err, user){

        if(user.length == 0) {
            var login = [{'login': 'failure'}];
        } else {
            var login = user; 
        }
        res.status(200).json({login: login}); 	
		
	});
}

var register = function(req, res){
    var username = req.params.username;
	var email = req.params.email;
	var password = req.params.password;
    
    console.log(username, email, password);
	User.find({email: email, username: username}, {_id:0, __v:0}, function (err, user){
        if(user.length == 0) {
             
            var user = new User({ username: username, email: email, password: password });
	        user.save(); 
            var register = user;
            
        } else {
           var register = [{'register': 'failure'}];
        }
        res.status(200).json({register: register}); 
		
	});
}

exports.list = list;
exports.insert = insert;
exports.mock = mock;
exports.login = login;
exports.register = register;