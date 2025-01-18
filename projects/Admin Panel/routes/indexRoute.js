const express = require('express');
const routes = express();

routes.use('/',require('./authRoute'));
routes.use('/dashboard',require('./dashboardRoute'));

module.exports = routes;