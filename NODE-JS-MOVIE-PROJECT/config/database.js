const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/Movie-Details');


const db=mongoose.connection;


db.on('connected',()=>{
    console.log("database connected");
})

module.exports=db;