var User = require('./model');

var list = function(req, res){
	User.find({}, {_id:0, __v:0}, function (err, users){
		res.status(200).json({users: users});
	});
}

var insert = function(req, res){ }

var mock = function(req, res){
	var user = new User({ name: "leandro", email: "leandroramos.crz@gmail.com", "password": "123456" });
	user.save();
}

exports.list = list;
exports.mock = mock;