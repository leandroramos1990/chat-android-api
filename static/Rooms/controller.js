var Room = require('./model');

var list = function(req, res){
	Room.find({}, {__v:0}, function (err, rooms){
		res.status(200).json({rooms: rooms});
        console.log('listou');
	});
}

var getLastRoomInserted = function(req, res){
    Room.findOne({},  {__v:0}, { sort: { 'createdAt' : -1 } }, function(err, lastRoomInserted) {
        if(!err){
            res.status(200).json({rooms: lastRoomInserted});
        } 
    });
}

var insert = function(req, res){ 
    var data = res.req.headers;
    var title = data.title;
    var description = data.description;
        
    var room = new Room({title: title, description: description });
    
    room.save(function (err) {
    if (err) {
        
        console.log(err);
        
      } else {
          console.log(room);
      }
    });
}

exports.list = list;
exports.insert = insert;
exports.getLastRoomInserted = getLastRoomInserted;