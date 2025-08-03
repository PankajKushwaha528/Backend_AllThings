const express= require('express');
const connectTodb = require('./src/database/db');
const noteModel = require('./src/models/note.model');

const app= express();
connectTodb(); // for connect server file to database
const notes=[]; 
app.use(express.json()); //it's middleware in-built function to help read/use req.body data 

app.post('/notes',async(req,res)=>{
    const{title,content}=req.body; // destructring
    // console.log(title,content);
    // notes.push(req.body); //for adding in notes array
    await noteModel.create({
        title,
        content
    })
    res.json({
        message:"Note added successfully"
    })
})

app.get('/notes',async(req,res)=>{
    
    const notes = await noteModel.find();
    res.json({
        message:"fetch successfuly",
        notes
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const noteId = req.params.id;
    await noteModel.findOneAndDelete({
        _id:noteId
    })

    res.json({
        message:"Note delete successfully"
    })
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
    
})

