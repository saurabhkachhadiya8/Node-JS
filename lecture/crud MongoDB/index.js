const express = require('express');
const port = 8080;
const app = express();

const db = require('./config/db');
const User = require('./models/UserModel');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    return res.render('view');
});
app.get('/add',(req,res)=>{
    return res.render('add');
});
app.post('/adduser',(req,res)=>{
    const {username,useremail,userpass} = req.body;
    User.create({
        name : username,
        email : useremail,
        password : userpass
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
        return false;
    });
});

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
})