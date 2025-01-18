const express = require('express');
const app = express();
const port = 8080;

// connect DataBase start
const db = require('./config/db');
db();
// connect DataBase end

const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// PassportJS Authentication start
const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    secret: 'AdminPanel',
    name: 'AdminPanel',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);
// PassportJS Authentication end

app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
})