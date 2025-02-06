const express = require('express');
const routes = express();

const passport = require('passport');

routes.use('/', require('./authRoute'));
routes.use('/dashboard', require('./dashboardRoute'));

module.exports = routes;