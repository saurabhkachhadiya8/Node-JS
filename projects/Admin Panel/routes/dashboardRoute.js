const express = require('express');
const routes = express.Router();

const { dashboardPage, crmAnalyticsPage, ordersPage, cryptocurrencyPage1, cryptocurrencyPage2 } = require('../controllers/DashboardController');

const passport = require('passport');

routes.get('/', passport.checkUser, dashboardPage);
routes.get('/crm_analytics', passport.checkUser, crmAnalyticsPage);
routes.get('/orders', passport.checkUser, ordersPage);
routes.get('/cryptocurrency1', passport.checkUser, cryptocurrencyPage1);
routes.get('/cryptocurrency2', passport.checkUser, cryptocurrencyPage2);

module.exports = routes;