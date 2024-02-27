const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: [true, "Group name is require"]
    }

}, { timestamps: true })

module.exports = mongoose.model("groupName", noteSchema)
