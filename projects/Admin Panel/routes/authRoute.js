const express = require('express');
const routes = express.Router();

const { signinPage, signupPage, signupUser, signinUser, logout } = require('../controllers/AuthController');

const passport = require('passport');

routes.get('/', signinPage);
routes.get('/signup', signupPage);
routes.post('/signupuser', signupUser);
routes.post('/signinuser', passport.authenticate('local', { failureRedirect: '/' }), signinUser);
routes.get('/logout', logout);

module.exports = routes;