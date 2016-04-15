var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
 
    username :{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }

});


var Chat = mongoose.model('chats', chatSchema);

module.exports = Chat;