const userModel = require('../models/UserModel');

const dashboardPage = async (req, res) => {
    try {
        return res.render('dashboard/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const crmAnalyticsPage = async (req, res) => {
    try {
        return res.render('dashboard/crm_analytics');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// category start
const categoriesPage = async (req, res) => {
    try {
        return res.render('dashboard/category/view');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const createCategory = async (req, res) => {
    try {
        return res.render('dashboard/category/create');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// category end
const ordersPage = async (req, res) => {
    try {
        return res.render('dashboard/orders');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const cryptocurrencyPage1 = async (req, res) => {
    try {
        return res.render('dashboard/cryptocurrency1');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const cryptocurrencyPage2 = async (req, res) => {
    try {
        return res.render('dashboard/cryptocurrency2');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const bankingPage1 = async (req, res) => {
    try {
        return res.render('dashboard/banking1');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const bankingPage2 = async (req, res) => {
    try {
        return res.render('dashboard/banking2');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const personalPage = async (req, res) => {
    try {
        return res.render('dashboard/personal');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const cmsAnalyticsPage = async (req, res) => {
    try {
        return res.render('dashboard/cms_analytics');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const influencerPage = async (req, res) => {
    try {
        return res.render('dashboard/influencer');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const travelPage = async (req, res) => {
    try {
        return res.render('dashboard/travel');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const teacherPage = async (req, res) => {
    try {
        return res.render('dashboard/teacher');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const educationPage = async (req, res) => {
    try {
        return res.render('dashboard/education');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const authorsPage = async (req, res) => {
    try {
        return res.render('dashboard/authors');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const doctorsPage = async (req, res) => {
    try {
        return res.render('dashboard/doctors');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const employeesPage = async (req, res) => {
    try {
        return res.render('dashboard/employees');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const workspacesPage = async (req, res) => {
    try {
        return res.render('dashboard/workspaces');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const meetingsPage = async (req, res) => {
    try {
        return res.render('dashboard/meetings');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const projectBoardsPage = async (req, res) => {
    try {
        return res.render('dashboard/project_boards');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const widgetUiPage = async (req, res) => {
    try {
        return res.render('dashboard/widget_ui');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const widgetContactPage = async (req, res) => {
    try {
        return res.render('dashboard/widget_contacts');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    dashboardPage, crmAnalyticsPage, categoriesPage, createCategory, ordersPage, cryptocurrencyPage1, cryptocurrencyPage2, bankingPage1, bankingPage2, personalPage, cmsAnalyticsPage, influencerPage, travelPage, teacherPage, educationPage, authorsPage, doctorsPage, employeesPage, workspacesPage, meetingsPage, projectBoardsPage, widgetUiPage, widgetContactPage
}