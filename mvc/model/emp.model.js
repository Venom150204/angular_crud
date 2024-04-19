const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/GGMU");

const playerSchema = new mongoose.Schema(
    {
        id : Number,
        name: String,
        wages : Number,
        
    });

    
const playerModel = new  mongoose.model("collection", playerSchema);

module.exports =  playerModel;

