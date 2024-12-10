const express = require('express');
const port = 8080;
const app = express();

const db = require('./config/db');
const User = require('./models/UserModel');

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
});