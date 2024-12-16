const express = require('express');
const port = 8080;
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    return res.render('view');
});
app.get('/add',(req,res)=>{
    return res.render('add');
});

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
})