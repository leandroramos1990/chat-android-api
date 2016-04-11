var express     =   require("express");
var app         =   express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(cors());

var usersController = require('./static/Users/controller');

mongoose.connect(process.env.MONGODB_URL);

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

/*
if (io.sockets.connected[socketid]) {
    io.sockets.connected[socketid].emit('message', 'for your eyes only');
}
*/

app.get('/api/users/list', usersController.list);

app.get('/api/users/mock', usersController.mock);

app.listen(process.env.PORT || 3000,function(){
    console.log("Working on port 3000");
});