const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topRopeSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    grade: {
        type: String,
        required: "Please Choose a Tape color"
    },
    setter: {
        type: Schema.Types.ObjectId,
        ref: "Setters",
        required: "Please choose a Setter"
    },
    climbColor : {
        type: String,
        required: "Please designate the climb color"
    }, 
    wall: {
        type: String,
        required: "Please designate where the climb was set"
    },
    targetGrade:String,
    active: {
        type: Boolean,
        default: true
    }
})

const TopRope = mongoose.model("Top Rope", topRopeSchema)

module.exports = TopRope