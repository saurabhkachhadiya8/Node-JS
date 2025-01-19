const userModel = require('../models/UserModel');

const nodemailer = require('nodemailer');

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
const logout = async (req, res) => {
    try {
        req.logout((err) => {
            if (err) {
                console.log(err);
                return false;
            }
            return res.redirect('/');
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

// forgotpassword start
const forgotPasswordPage = async (req, res) => {
    try {
        return res.render('forgot_password');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const forgotPasswordOtp = async (req, res) => {
    try {
        return res.render('forgot_password_otp');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const recoveryCheck = async (req, res) => {
    try {
        const recoveryemail = req.body.recoveryemail;
        const user = userModel.findOne({ email: recoveryemail });
        if (!user) {
            console.log("User Not Found");
            return false;
        }
        const otp = Math.floor(100000 + Math.random() * 999999);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'saurabhkachhadiya890@gmail.com',
                pass: 'ozux pzzq ofdl gaip'
            }
        });

        var mailOptions = {
            from: 'saurabhkachhadiya890@gmail.com',
            to: recoveryemail,
            subject: 'ForgotPassword',
            html: `<h2 style="color:green;">Hello ${user?.name}. <br/> Your One Time Password is :- ${otp}</h2>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                let auth = {
                    recoveryemail: recoveryemail,
                    otp: otp
                }
                res.cookie('user',auth);
                return res.redirect('/forgot_password_otp');
            }
        });
        // return res.redirect('/forgot_password_otp');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// forgotpassword end

module.exports = {
    signupPage, signinPage, signupUser, signinUser, logout, forgotPasswordPage, recoveryCheck, forgotPasswordOtp
}