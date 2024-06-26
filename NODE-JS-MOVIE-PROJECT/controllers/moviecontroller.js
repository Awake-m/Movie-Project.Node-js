const movietables= require("../model/schema");
const path=require('path');

const Home=(req,res)=>{
    res.render('form');
}

const insert=(req,res)=>{

    console.log(req.body);
    console.log(req.file);


    movietables.create({
        moviename:req.body.moviename,
        lstdate:req.body.lstdate,
        showtime:req.body.showtime,
        image:req.file.path,
        showseat:req.body.showseat
        
    }).then(()=>{
        console.log("data insert successfully....");
        return res.redirect('/table');
    })
}

const Table=(req,res)=>{


    movietables.find({}).then((alldata)=>{
        res.render('table',{
            data: alldata
        })
    })
}

const Delete=(req,res)=>{
    let id=req.query.id;

    movietables.findByIdAndDelete(id)
    .then(()=>{
        console.log("Data delete....");
        return res.redirect('/table')
    })
}


const Edit=(req,res)=>{

    let id=req.query.id;

    movietables.findById(id)
    .then((alldata)=>{
        res.render('edit',{
            edit:alldata
        })
    })
   
}

const Update=(req,res)=>{
    let id=req.body.id;

    console.log(req.file)

    if(req.file)
    {
        var data={
            moviename:req.body.moviename,
            lstdate:req.body.lstdate,
            showtime:req.body.showtime,
            image:req.file.path,
            showseat:req.body.showseat
        }
    }
    else{

        var data={
        moviename:req.body.moviename,
        lstdate:req.body.lstdate,
        showtime:req.body.showtime,
        image:req.file.path,
        showseat:req.body.showseat
        }
    }

    movietables.findByIdAndUpdate(id,data)
    .then((updatedData) => {
        console.log("Data updated....");
        return res.redirect('/table')
    })
}



module.exports={
    Home,
    insert,
    Table,
    Delete,
    Edit,
    Update
    
}