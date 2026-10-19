const express = require('express')
const app = express()
console.log('app page is running')

app.use(express.json())
const notes = []

// POST
app.post('/notes', (req, res) => {

    notes.push(req.body)
    res.status(200).json({
        message: "Notes Stored Successfully !!!"
    })
})

// GET
app.get('/notes', (req, res) => {

    res.status(201).json({
        notes: notes,
        message: "Notes Fetched Successfully !!!"
    })
})

// DELETE
app.delete('/notes/:index',(req,res)=>{

    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        messsage:"Notes Deleted Successfully !!!"
    })

})

// PATCH - UPDATE 
app.patch('/notes/:index',(req,res)=>{

    const index = req.params.index
    const description = req.body.description
    const title =req.body.title
    
    notes[index].title = title
    notes[index].description = description
    res.status(200).json({
        message:"Notes Updated Successfully !!!"
    })
})
module.exports = app