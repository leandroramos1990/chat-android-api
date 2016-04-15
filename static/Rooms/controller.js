var Room = require('./model');

var list = function(req, res){
	Room.find({}, {__v:0}, function (err, rooms){
		res.status(200).json({rooms: rooms});
	});
}

var insert = function(req, res){ 
    var data = res.req.headers;
    var title = data.title;
    var description = data.description;
        
    var room = new Room({title: title, description: description });
    room.save();       
}

exports.list = list;
exports.insert = insert;