const express = require('express');
const connectTodb = require('./src/db/db');
const noteModel = require('./src/model/note.model');
const app = express();
connectTodb();
app.use(express.json()); //midlware for read data
app.post('/notes',async(req,res)=>{

    const{title,content}=req.body;
    // console.log(title,content);
    await noteModel.create({
        title,
        content
    })
    
    res.json({
        message:"Note create successfully!"
    })
})

app.get('/notes', async (req,res)=>{
    const notes =await noteModel.find();

    res.json({
        message:"All data fetch successfully...",
        notes
    })
})

app.delete('/notes/:id',async (req,res)=>{
    const noteId = req.params.id;
    await noteModel.findOneAndDelete({
        _id:noteId
    })
    res.json({
        message:"Note delete successfully."
    })
})

app.patch('/notes/:id',async(req,res)=>{
    const noteId = req.params.id;
    const{title}=req.body;
    await noteModel.findByIdAndUpdate({
        _id:noteId
    },{
        title:title
    })
    res.json({
        message:"Note update successfully"
    })
})
app.listen(3000,()=>{
    console.log("Server Started");
    
})