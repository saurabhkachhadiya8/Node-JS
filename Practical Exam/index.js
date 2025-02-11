const express = require('express');
const app = express();
const port = 8080;
app.set('view engine','ejs');

app.use(express.urlencoded());

const db = require('./config/database');
db();

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads/')));

// passport start 
const passport = require('passport');
const passportLocal = require('./middleware/passportLocal');
const session = require('express-session');
app.use(session({
    secret: 'PracticalExam',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);
// passport end 

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
});