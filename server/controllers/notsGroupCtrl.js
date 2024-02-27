const noteModel = require("../module/notesGroup")
const createNote = async (req, res) => {
    try {
        const { groupName } = req.body;
        // validatin
        if (!groupName) {
            return res.status(500).send({
                success: false,
                message: "Please provide all fields",
            });
        }
        const newNote = await noteModel.create({ groupName });
        res.status(201).send({
            success: true,
            message: "Note  created successfully",
            newNote,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in create note api",
            error,
        });
    }
}

const getAllNotes = async (req, res) => {
    try {
        const notes = await noteModel.find({});
        if (!notes) {
            return res.status(404).send({
                success: false,
                message: "No Notes Group Created"
            })
        }
        res.status(200).send({
            success: true,
            totalNotes: notes.length,
            notes
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting  all notes group api",
            error,
        });
    }
}
module.exports = { createNote, getAllNotes }