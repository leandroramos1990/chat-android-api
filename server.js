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

url = 'mongodb://root:#q1w2e3#@ds019970.mlab.com:19970/chat';
mongoose.connect(process.env.MONGODB_URL || url);

io.on('connection', function(socket){
    console.log('usuario conectado');

    socket.on('disconnect', function(){
        console.log('usuario desconectado');
    });
    
	socket.on('chat message', function(msg){
        io.emit('chat message', 'msg');
	});
        
});

app.get('/api/users/list', usersController.list);
app.get('/api/users/mock', usersController.mock);
app.post('/api/users/login', usersController.login);

app.get('/api/rooms/list', roomsController.list);
app.post('/api/rooms/insert', roomsController.insert);

app.post('/register',function(req,res){         
    var email = req.body.email;             
    var password = req.body.password;       

    register.register(email,password,function (found) {             
               console.log(found);             
               res.json(found);    
     });     
}); 

app.post('/send/:room/', function(req, res) {
    var room = req.params.room
    var message = req.body;

    io.sockets.in(room).emit('message', { room: room, message: message });

    res.end('message sent');
});

http.listen(process.env.PORT || 3000,function(){
    console.log("Working on port 3000");
});