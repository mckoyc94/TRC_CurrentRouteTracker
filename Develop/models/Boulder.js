const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boulderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    tapeColor: {
        type: String,
        required: "Please choose a tape color"
    },
    setter: {
        type: String,
        ref: "Setters",
        required: "Please choose a Setter"
    },
    climbColor : {
        type: String,
        required: "Please designate the climb color"
    }, 
    location: {
        type: String,
        required: "Please designate where the climb was set"
    },
    targetGrade: String,
    active: {
        type: Boolean,
        default: true
    }
})

const Boulders = mongoose.model("Boulders", boulderSchema)

module.exports = Boulders