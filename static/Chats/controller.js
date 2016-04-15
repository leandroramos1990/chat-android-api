var Chat = require('./model');

var list = function(req, res){
	Chat.find({}, {__v:0}, function (err, chats){
		res.status(200).json({chats: chats});
	});
}

var insert = function(req, res){ 
    /*
    var data = res.req.headers;
    var title = data.title;
    var description = data.description;
        
    var room = new Room({title: title, description: description });
    room.save();  
    */
}

exports.list = list;