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
    },
    idRoom:{
        type: String,
        required: true
    },
     typeMessage:{
        type: String,
        required: false
    }

});


var Chat = mongoose.model('chats', chatSchema);

module.exports = Chat;