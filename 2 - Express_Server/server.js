const express=require('express');

const app=express();
app.use(express.json());
const todos=[]; //store todo
//add todos
app.post('/',(req,res)=>{
    console.log(req.body);
    const{title,description}=req.body;
    if(!title){
        return res.status(400).json({error:"Title is required"})
    }
    const newTodo ={title,description}
    todos.push(newTodo);
    
    res.send({
        message:"Task added successfully!",
        data: newTodo
    });
    
});
//get: fetch all data
app.get('/',(req,res)=>{
    res.send({
        message:"All tasks",
        todos:todos
    })
})

app.listen(3000,()=>{
    console.log("Server is started on port 3k");
    
})