const express = require('express');
const routes = express.Router();

const { loginPage } = require('../controllers/AuthController');

routes.get('/',loginPage);

module.exports = routes;