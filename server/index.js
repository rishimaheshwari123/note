const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// config 
dotenv.config();

// rest object  
const app = express();

connectDB();

// middleware 
app.use(cors());
app.use(express.json());

// route 
app.use("/api/v1/notes", require("./router/notGroupRoute"))
app.use("/api/v1/singleNote", require("./router/singleNode"))

// port 
const PORT = process.env.PORT || 8080

// listen 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})