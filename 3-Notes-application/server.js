const express = require('express');
const notes=[];
const app = express();
app.use(express.json());
app.post('/notes',(req,res)=>{
    console.log(req.body);
    
    notes.push(req.body);
    res.json({
        message:"Task added successfully!"
    })
})

app.get('/notes',(req,res)=>{
    res.json({
        message:"All task",
        notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;
    delete notes[index];

    res.json({
        message:"Task deleted successfully!"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const {title}=req.body;
    notes[index].title = title;

    res.json({
        message:"Task updated successfuly"
    })
})

app.listen(3000,()=>{
    console.log("Server is started on port 3000");
    
})