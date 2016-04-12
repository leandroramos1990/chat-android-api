var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
 
    name :{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    user_owner_id :{
        type: String,
        required: false
    }

});


var Room = mongoose.model('chat', roomSchema);

module.exports = Room;