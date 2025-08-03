const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Welcome to Home page.");
})



server.listen(3000,()=>{
    console.log("Server stared on port 3000");
    
})