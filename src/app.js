const express = require('express')
const app = express()
const notes =[]

app.use(express.json())


// POST METHOD
app.post("/notes",(req,res)=>{

    notes.push(req.body)
    res.status(201).json({
        message:"notes created successfully !!!"
    })
})

// GET METHOD
app.get("/notes",(req,res)=>{
    
    res.status(200).json({
        message:"notes fetched successfully !!!",
        notes:notes
    })
})

// DELETE METHOD
app.delete("/notes/:index",(req,res)=>{

    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:"notes deletd successfully !!!"
    })
})


module.exports=app
