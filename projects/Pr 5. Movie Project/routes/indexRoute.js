const express = require('express');
const routes = express.Router();
const { index } = require('../controllers/MovieController');

routes.get('/',index);

module.exports = routes;