const userModel = require('../models/UserModel');
const categoryModel = require('../models/CategoryModel');

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
const categoryPage = async (req, res) => {
    try {
        let categories = await categoryModel.find({});
        return res.render('dashboard/category/view', {
            categories
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const createCategoryPage = async (req, res) => {
    try {
        const id = req.query.id;
        let singleCategory = null;
        if (id) {
            singleCategory = await categoryModel.findById(id);
        }
        return res.render('dashboard/category/create', {
            singleCategory
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const createCategory = async (req, res) => {
    try {
        const id = req.query.id;
        console.log(id);
        
        const { title, description, tags } = req.body;
        if (!id) {
            await categoryModel.create({
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/create_category');
        } else {
            await categoryModel.findByIdAndUpdate(id, {
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/category');
        }
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

module.exports = {
    dashboardPage, crmAnalyticsPage, categoryPage, createCategoryPage, createCategory, ordersPage, cryptocurrencyPage1, cryptocurrencyPage2, bankingPage1, bankingPage2, personalPage, cmsAnalyticsPage, influencerPage, travelPage, teacherPage, educationPage, authorsPage, doctorsPage, employeesPage, workspacesPage
}