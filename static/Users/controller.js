var User = require('./model');

var list = function(req, res){
	User.find({}, {_id:0, __v:0}, function (err, users){
		res.status(200).json({users: users});
	});
}

var login = function(req, res){
	var email = req.params.email;
	var password = req.params.password;
    
	User.find({email: email, password: password}, {_id:0, __v:0}, function (err, user){
        if(user != null) {
            res.status(200).json({login: "success"});    
        } else {
        	res.status(200).json({login: "failure"}); 
        }
		
	});
}

var insert = function(req, res){
    var data = res.req.headers;
    var name = data.name;
    var email = data.email;
    var password = data.password;
    
    var user = new User({name: name, email: email, password: password });
    user.save(); 
}

var mock = function(req, res){
	var user = new User({ name: "leandro", email: "leandroramos.crz@gmail.com", "password": "123456" });
	user.save();
}

exports.list = list;
exports.insert = insert;
exports.mock = mock;
exports.login = login;