const userModel = require('../models/UserModel');

const signupPage = async (req, res) => {
    try {
        if (res.locals.users) {
            res.redirect('/dashboard');
        }
        res.render('signup');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const signinPage = async (req, res) => {
    try {
        if (res.locals.users) {
            res.redirect('/dashboard');
        }
        res.render('signin');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const signupUser = async (req, res) => {
    try {
        const { username, email, password, re_password, privacy_policy } = req.body;
        if (!username || !email || !password || !re_password || !privacy_policy) {
            console.log("Please Fill All Fields");
            return false;
        }
        if (password !== re_password) {
            console.log("Passwords Are Do Not Match.");
            return false;
        }
        await userModel.create({
            username: username,
            email: email,
            password: password,
            privacy_policy: privacy_policy
        });
        console.log("User Created");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const signinUser = async (req, res) => {
    try {
        const { email, password, remember } = req.body;
        if (!email || !password || !remember) {
            console.log("Please Fill All Fields");
            return false;
        }
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const dashboardPage = async (req, res) => {
    try {
        return res.render('dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    signupPage, signinPage, signupUser, signinUser, dashboardPage
}