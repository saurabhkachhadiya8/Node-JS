const userModel = require('../models/UserModel');

const loginPage = async (req, res) => {
    try {
        if (res.locals.user) {
            return res.redirect('/dashboard');
        }
        return res.render('login');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("User Login Successfully");
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const registerPage = async (req, res) => {
    try {
        if (res.locals.user) {
            return res.redirect('/dashboard');
        }
        return res.render('register');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const registerUser = async (req, res) => {
    try {
        const { username, email, password, con_password, phone, city, gender } = req.body;
        if (!username || !email || !password || !con_password || !phone || !city || !gender) {
            console.log("All Fields Are Required");
            return false;
        }
        if (password != con_password) {
            console.log("Both Passwords Are Not Match");
            return false;
        }
        await userModel.create({
            username: username,
            email: email,
            password: password,
            phone: phone,
            city: city,
            gender: gender
        })
        console.log("User Creted Successfully");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const logoutUser = async (req, res) => {
    try {
        req.logout((err) => {
            if (err) {
                console.log(err);
                return false;
            }
            console.log("User Logout Successfully");
            return res.redirect('/');
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    loginPage, loginUser, registerPage, registerUser, logoutUser
}