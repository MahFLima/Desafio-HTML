const express = require("express")
const app = express()
const data = require("./data.json")

app.use(express.json())

app.get("/questions", function(req,res){
    res.json(data)
})

app.get("/questions/:id", function(req,res){
    const { id } = req.params
    const question = data.find(qt => qt.id == id)

    if(!question) return res.status(204).json()

    res.json(question)
})

app.listen(3000, function(){
    console.log("Server is running")
})