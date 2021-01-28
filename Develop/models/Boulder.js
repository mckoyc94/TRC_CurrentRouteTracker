const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boulderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    tapeColor: {
        type: String,
        required: "Please Choose a Tape color"
    },
    setter: {
        type: String
    },
    climbColor : {
        type: String
    }, 
    location: {
        type: String
    }
})

const Boulders = mongoose.model("Boulders", boulderSchema)