var Chat = require('./model');

var list = function(req, res){
    var idroom = req.params.idroom;
    
	Chat.find({idRoom: idroom}, {__v:0}, function (err, chats){
		res.status(200).json({chats: chats});
	});
}

var insert = function(req, res){ 
    var data = res.req.headers;
    var username = data.username;
    var message = data.message;
    var idRoom = data.idroom;
    var typeMessage = data.typemessage;
    
    console.log(data);
    console.log(username, message, idRoom);
        
    var chat = new Chat({username: username, message: message, idRoom: idRoom, typeMessage: typeMessage });
    //chat.save();  
        
    chat.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('salvou mensagem');
          }
    });
}

var mock = function(req, res){
    var chat = new Chat({ username: "leandro", message: "oi galera", "typeMessage": "normal" });
	chat.save();
    
    res.status(200).json({status: "ok"});
}

exports.list = list;
exports.insert = insert;
exports.mock = mock;