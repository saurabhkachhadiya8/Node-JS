const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const userModel = require('../models/UserModel');

passport.use(new passportLocal({
    usernameField: 'emailorphone',
    passwordField: 'password',
}, (async (emailorphone, password, done) => {
    try {
        let user = null;
        if (!isNaN(emailorphone) && /^\d+$/.test(emailorphone)) {
            user = await userModel.findOne({ phone: Number(emailorphone), password: password });
        } else {
            user = await userModel.findOne({ email: emailorphone, password: password });
        }
        if (!user) {
            console.log("User not Found");
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        return done(null, false);
    }
})));
passport.serializeUser((user, done) => {
    return done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findById(id);
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
});
passport.checkUser = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/register');
    }
    return next();
}
passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user;
    }
    return next();
}

module.exports = passport;