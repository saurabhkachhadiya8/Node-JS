const express = require('express');
const routes = express.Router();

const { dashboardPage } = require('../controllers/DashboardController');

routes.get('/',dashboardPage);

module.exports = routes;