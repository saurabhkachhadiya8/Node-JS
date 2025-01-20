const express = require('express');
const routes = express.Router();

const { dashboardPage, crmAnalyticsPage, ordersPage, cryptocurrencyPage1, cryptocurrencyPage2, bankingPage1, bankingPage2, personalPage, cmsAnalyticsPage, influencerPage, travelPage, teacherPage, educationPage, authorsPage, doctorsPage, employeesPage } = require('../controllers/DashboardController');

const passport = require('passport');

routes.get('/', passport.checkUser, dashboardPage);
routes.get('/crm_analytics', passport.checkUser, crmAnalyticsPage);
routes.get('/orders', passport.checkUser, ordersPage);
routes.get('/cryptocurrency1', passport.checkUser, cryptocurrencyPage1);
routes.get('/cryptocurrency2', passport.checkUser, cryptocurrencyPage2);
routes.get('/banking1', passport.checkUser, bankingPage1);
routes.get('/banking2', passport.checkUser, bankingPage2);
routes.get('/personal', passport.checkUser, personalPage);
routes.get('/cms_analytics', passport.checkUser, cmsAnalyticsPage);
routes.get('/influencer', passport.checkUser, influencerPage);
routes.get('/travel', passport.checkUser, travelPage);
routes.get('/teacher', passport.checkUser, teacherPage);
routes.get('/education', passport.checkUser, educationPage);
routes.get('/authors', passport.checkUser, authorsPage);
routes.get('/doctors', passport.checkUser, doctorsPage);
routes.get('/employees', passport.checkUser, employeesPage);

module.exports = routes;