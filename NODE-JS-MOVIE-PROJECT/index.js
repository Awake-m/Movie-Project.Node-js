const express=require('express');
const port=1515;

const app=express();
const path=require('path');

const database=require('./config/database');
const movietables=require('./model/schema');

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use('/',require('./routes/movieroute'));
app.set("view engine","ejs")
// app.get('/',(req,res)=>{
//     res.render('form')
// })
app.listen(port,()=>{
    console.log("Server Started at :-"+port)
})