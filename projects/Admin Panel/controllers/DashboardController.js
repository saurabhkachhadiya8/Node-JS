const userModel = require('../models/UserModel');

const dashboardPage = async (req, res) => {
    try {
        return res.render('dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const crmAnalyticsPage = async (req, res) => {
    try {
        return res.render('dashboard_crm_analytics');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const ordersPage = async (req, res) => {
    try {
        return res.render('dashboard_orders');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const cryptocurrencyPage1 = async (req, res) => {
    try {
        return res.render('dashboard_cryptocurrency_v1');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const cryptocurrencyPage2 = async (req, res) => {
    try {
        return res.render('dashboard_cryptocurrency_v2');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    dashboardPage, crmAnalyticsPage, ordersPage, cryptocurrencyPage1, cryptocurrencyPage2
}