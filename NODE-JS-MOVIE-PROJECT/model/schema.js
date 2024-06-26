const mongoose=require('mongoose')


const schema=mongoose.Schema({
    moviename:{
        type: String,
        // required: true
    },
    lstdate:{
        type: String,
        // required: true
    },
    showtime:{
        type: String,
        // required: true
    },
    image:{
        type:String,
        // required: true
    },
    showseat:{
        type:String,
        // required: true
    }
  
})

const movietables=mongoose.model('movietables',schema);

module.exports=movietables;