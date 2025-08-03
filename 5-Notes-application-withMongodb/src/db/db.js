const mongoose = require('mongoose');

function connectTodb(){
    mongoose.connect("mongodb+srv://pankajas528:EYIsf8QAtRmFJxD4@cohort.0dhfrcn.mongodb.net/Cohort")

    .then(()=>{
        console.log("Database connected ...");
        
    })
}
module.exports=connectTodb;