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
var roomsController = require('./static/Rooms/controller');
var chatsController = require('./static/Chats/controller');

url = 'mongodb://root:#q1w2e3#@ds019970.mlab.com:19970/chat';
mongoose.connect(process.env.MONGODB_URL || url);

io.on('connection', function(socket){
    console.log('usuario conectado no socket ' + socket.id);

    socket.on('disconnect', function(){
        console.log('usuario desconectado');
    });
    
	socket.on('message', function(msg){
		console.log(msg);
        //io.emit('message', msg);
        //socket.emit('message',{message:msg});
        
        socket.broadcast.emit('message', msg);
	});    
});

app.get('/api/users/list', usersController.list);
app.get('/api/users/mock', usersController.mock);
app.get('/api/users/login/:email/:password', usersController.login);
app.get('/api/users/register/:email/:password/:username', usersController.register);

app.get('/api/rooms/list', roomsController.list);
app.post('/api/rooms/insert', roomsController.insert);
app.get('/api/rooms/getLastRoomInserted', roomsController.getLastRoomInserted);

app.get('/api/chats/list/:idroom', chatsController.list);
app.post('/api/chats/insert', chatsController.insert);
app.get('/api/chats/mock', chatsController.mock);


http.listen(process.env.PORT || 3000,function(){
    console.log("Working on port 3000");
});