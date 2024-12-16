const express = require('express');
const port = 8080;
const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const User = require('./models/UserModel');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    User.find({})
        .then((allData) => {
            return res.render('view', {
                allData
            });
        }).catch((err) => {
            console.log(err);
            return false;
        });
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
app.get('/deleteuser', (req, res) => {
    const id = req.query.deleteId;
    User.findByIdAndDelete(id)
        .then((data) => {
            console.log('User Delete Successfully.');
            return res.redirect('/');
        }).catch((err) => {
            console.log(err);
            return false;
        });
});
app.get('/edituser', (req, res) => {
    const id = req.query.editId;
    User.findById(id)
        .then((single) => {
            return res.render('edit', {
                single
            });
        }).catch((err) => {
            console.log(err);
            return false;
        });
});
app.post('/updateuser', (req, res) => {
    const { updateId, username, useremail, userpass } = req.body;
    User.findByIdAndUpdate(updateId, {
        name: username,
        email: useremail,
        password: userpass
    }).then((updated) => {
        console.log('User Update Successfully.');
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