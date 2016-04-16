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
    },
    created_at: 
    { type: Date, 
      required: true, 
      default: Date.now }

},{ timestamps: true });


var Room = mongoose.model('rooms', roomSchema);

module.exports = Room;