const express = require("express")
const bodyParse = require("body-parser")

const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(bodyParse.json());
app.use("/", userRoutes);


app.listen(3000, () =>{
    console.log("Server is running on http://localhost:3000")
})