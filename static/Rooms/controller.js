var Room = require('./model');

var list = function(req, res){
	User.find({}, {_id:0, __v:0}, function (err, users){
		res.status(200).json({users: users});
	});
}

var insert = function(req, res){ }

exports.list = list;