const express = require("express");
const { createNote, getAllNotes } = require("../controllers/notsGroupCtrl");

const router = express.Router();

// router 
// create note group || post 
router.post("/group", createNote)

// get all note  || get
router.get("/get-all", getAllNotes)



module.exports = router;