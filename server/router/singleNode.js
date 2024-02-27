const express = require("express");
const { createSingleNote, getAllNodeForSingleNote } = require("../controllers/singleNoteCtrl");

const router = express.Router();

// router 
// create single note || post 
router.post("/note/:id", createSingleNote)

// get signle note  || get
router.get("/get-singleNote", getAllNodeForSingleNote)



module.exports = router;