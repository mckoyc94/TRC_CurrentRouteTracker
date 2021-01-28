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
        type: String
    },
    climbColor : {
        type: String
    }, 
    wall: {
        type: String
    },
    targetGrade: {
        type: String
    }
})

const TopRope = mongoose.model("Top Rope", topRopeSchema)

module.exports = TopRope