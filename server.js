var express     =   require("express");
var app         =   express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

var gcm = require('node-gcm');

/*
var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        type: 'pong',
        message: 'Hello Android!'
    }
});

var sender = new gcm.Sender('AIzaSyDoqbXqoqI67drtDHM-pNUk-PYd-45ZOeY');
var registrationIds = [aDoc.registrationId];

sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});
*/

app.use(bodyParser.json());
app.use(cors());

var usersController = require('./Users/controller');

var url = 'mongodb://root:#q1w2e3#@ds019970.mlab.com:19970/chat';
mongoose.connect(url);

app.get('/api/users/list', usersController.list);

app.get('/api/users/mock', usersController.mock);

app.listen(process.env.PORT || 3000,function(){
    console.log("Working on port 3000");
});