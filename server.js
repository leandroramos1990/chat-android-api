var express     =   require("express");
var app         =   express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var gcm = require('node-gcm');

app.use(bodyParser.json());
app.use(cors());

var usersController = require('./static/Users/controller');

var url = 'mongodb://root:#q1w2e3#@ds019970.mlab.com:19970/chat';
mongoose.connect(url);

app.get('/api/users/list', usersController.list);

app.get('/api/users/mock', usersController.mock);

app.listen(process.env.PORT || 3000,function(){
    console.log("Working on port 3000");
});