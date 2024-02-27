const singleNoteModle = require("../module/singleNote")
const createSingleNote = async (req, res) => {
    try {

        const { id } = req.params;
        if (!id) {
            return res.status(500).send({
                success: false,
                message: "Please Provide ID"
            })
        }
        const { desc } = req.body;
        // validatin
        if (!desc) {
            return res.status(500).send({
                success: false,
                message: "Please provide all fields",
            });
        }
        const singleNote = await singleNoteModle.create({ desc });
        res.status(201).send({
            success: true,
            message: " Single Note  created successfully",
            singleNote,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in create single note api",
            error,
        });
    }
}

const getAllNodeForSingleNote = async () => {
    try {
        const notes = await singleNoteModle.find({});
        if (!notes) {
            return res.status(404).send({
                success: false,
                message: "No Notes Group found"
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
module.exports = { createSingleNote, getAllNodeForSingleNote }