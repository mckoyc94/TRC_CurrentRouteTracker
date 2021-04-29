const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const setterSchema = new Schema({
    name: {
        type: String,
        required: "Please enter a name for the Setter"
    },
    initials: {
        type: String,
        required: "Please enter the Setter's initials"
    },
    boulders: [{
        type: Schema.Types.ObjectId,
        ref: 'Boulders'
    }],
    top_rope: [{
        type: Schema.Types.ObjectId,
        ref: "Top Rope"
    }],
    active: {
        type: Boolean,
        default: true
    }
})

const Setter = mongoose.model("Setters", setterSchema)

module.exports = Setter