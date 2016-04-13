var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
 
    title :{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }

});


var Room = mongoose.model('rooms', roomSchema);

module.exports = Room;