const express = require('express');
const port = 8080;
const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const User = require('./models/UserModel');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('view');
});
app.get('/add', (req, res) => {
    return res.render('add');
});
app.post('/adduser', (req, res) => {
    const { username, useremail, userpass } = req.body;
    User.create({
        name: username,
        email: useremail,
        password: userpass
    }).then((data) => {
        console.log(`record add.`);
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    });
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
});