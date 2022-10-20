const express = require("express")
const app = express()
const port = 3000;

app.get("/", (req, res) =>{
    let hi = "hi mom"
    res.status(200).json({test: "hi"})
})

app.listen(port)