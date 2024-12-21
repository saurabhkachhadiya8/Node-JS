const express = require('express');
const port = 8080;
const app = express();

const database = require('./assets/js/db');
database();

app.set('view engine','ejs');

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running on host :- ${port}`);    
});