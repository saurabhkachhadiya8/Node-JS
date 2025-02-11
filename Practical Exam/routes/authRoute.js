const express = require('express');
const routes = express.Router();

const { loginPage, loginUser, registerPage, registerUser, logoutUser } = require('../controllers/AuthController');
const passport = require('passport');

routes.get('/', loginPage);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.get('/register', registerPage);
routes.post('/registeruser', registerUser);
routes.get('/logoutuser', logoutUser);

module.exports = routes;