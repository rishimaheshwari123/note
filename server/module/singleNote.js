const mongoose = require("mongoose")

const singleSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: [true, "Desc  is require"]
    },


}, { timestamps: true })

module.exports = mongoose.model("SingleNote", singleSchema)
