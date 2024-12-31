const express = require('express');
const port = 8080;
const app = express();

const db = require('./config/db');
db();

app.set('view engine','ejs');

app.use('/',require('./routes/authRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
});