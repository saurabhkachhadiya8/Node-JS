const express = require('express');
const port = 8080;
const app = express();
const path = require('path');

const db = require('./config/db');
db();

app.set('view engine', 'ejs');
app.use(express.urlencoded());

const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    secret: 'sk_patel',
    name: 'saurabh',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

app.use(express.static(path.join(__dirname, 'config')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
});