const userModel = require('../models/UserModel');
const categoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');
const extrasubcategoryModel = require('../models/ExtrasubcategoryModel');

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
        let subcategories = await subcategoryModel.find({}).populate('categoryId');
        return res.render('dashboard/category/view', {
            categories,
            subcategories
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const createCategoryPage = async (req, res) => {
    try {
        const editid = req.query.editid;
        let singleCategory = null;
        if (editid) {
            singleCategory = await categoryModel.findById(editid);
        }
        return res.render('dashboard/category/create', {
            singleCategory
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const categoryCrud = async (req, res) => {
    try {
        const updateid = req.query.updateid;
        const { title, description, tags } = req.body;
        if (updateid) {
            await categoryModel.findByIdAndUpdate(updateid, {
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/category');
        }
        await categoryModel.create({
            title: title,
            description: description,
            // image:req.file.filename,
            tags: tags
        });
        return res.redirect('/dashboard/create_category');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteCategory = async (req, res) => {
    try {
        const deleteid = req.query.deleteid;
        await categoryModel.findByIdAndDelete(deleteid);
        return res.redirect('/dashboard/category');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const categoryStatus = async (req, res) => {
    try {
        const { statusid, status } = req.query;
        if (status === "deactive") {
            await categoryModel.findByIdAndUpdate(statusid, {
                status: "active"
            });
        } else {
            await categoryModel.findByIdAndUpdate(statusid, {
                status: "deactive"
            });
        }
        return res.redirect('/dashboard/category');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const changesCatByCheckboxes = async (req, res) => {
    try {
        const checkedid = req.body.category_checkbox;
        const { deactivate, activate, deleteCat } = req.body;
        if (deactivate) {
            for (let i = 0; i < checkedid.length; i++) {
                await categoryModel.findByIdAndUpdate(checkedid[i], {
                    status: "deactive"
                });
            }
        } else if (activate) {
            for (let i = 0; i < checkedid.length; i++) {
                await categoryModel.findByIdAndUpdate(checkedid[i], {
                    status: "active"
                });
            }
        } else if (deleteCat) {
            for (let i = 0; i < checkedid.length; i++) {
                await categoryModel.findByIdAndDelete(checkedid);
            }
        }
        return res.redirect('/dashboard/category');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// subcategory start 
const subcategoryPage = async (req, res) => {
    try {
        const subcategories = await subcategoryModel.find({}).populate('categoryId');
        return res.render('dashboard/category/subcategory/view', {
            subcategories
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const createSubcategoryPage = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        const editid = req.query.editid;
        let singleSubcategory = null;
        if (editid) {
            singleSubcategory = await subcategoryModel.findById(editid).populate('categoryId');
        }
        return res.render('dashboard/category/subcategory/create', {
            category,
            singleSubcategory
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const subcategoryCrud = async (req, res) => {
    try {
        const updateid = req.query.updateid;
        const { category, title, description, tags } = req.body;
        if (updateid) {
            await subcategoryModel.findByIdAndUpdate(updateid, {
                categoryId: category,
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/subcategory');
        }
        await subcategoryModel.create({
            categoryId: category,
            title: title,
            description: description,
            // image:req.file.filename,
            tags: tags
        });
        return res.redirect('/dashboard/create_subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteSubcategory = async (req, res) => {
    try {
        const deleteid = req.query.deleteid;
        await subcategoryModel.findByIdAndDelete(deleteid);
        return res.redirect('/dashboard/subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const subCategoryStatus = async (req, res) => {
    try {
        const { statusid, status } = req.query;
        if (status === "deactive") {
            await subcategoryModel.findByIdAndUpdate(statusid, {
                status: "active"
            });
        } else {
            await subcategoryModel.findByIdAndUpdate(statusid, {
                status: "deactive"
            });
        }
        return res.redirect('/dashboard/subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const changesSubcatByCheckboxes = async (req, res) => {
    try {
        const checkedid = req.body.subcategory_checkbox;
        const { deactivate, activate, deleteSubcat } = req.body;
        if (deactivate) {
            for (let i = 0; i < checkedid.length; i++) {
                await subcategoryModel.findByIdAndUpdate(checkedid[i], {
                    status: "deactive"
                });
            }
        } else if (activate) {
            for (let i = 0; i < checkedid.length; i++) {
                await subcategoryModel.findByIdAndUpdate(checkedid[i], {
                    status: "active"
                });
            }
        } else if (deleteSubcat) {
            for (let i = 0; i < checkedid.length; i++) {
                await subcategoryModel.findByIdAndDelete(checkedid);
            }
        }
        return res.redirect('/dashboard/subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// extrasubcategory start 
const extarsubcategoryPage = async (req, res) => {
    try {
        const extrasubcategories = await extrasubcategoryModel.find({}).populate('categoryId').populate('subcategoryId');
        return res.render('dashboard/category/extrasubcategory/view', {
            extrasubcategories
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const createExtrasubcategoryPage = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        const subcategory = await subcategoryModel.find({});
        const editid = req.query.editid;
        let singleExtrasubcategory = null;
        if (editid) {
            singleExtrasubcategory = await extrasubcategoryModel.findById(editid).populate('categoryId').populate('subcategoryId');
        }
        return res.render('dashboard/category/extrasubcategory/create', {
            category,
            subcategory,
            singleExtrasubcategory
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const extrasubcategoryCrud = async (req, res) => {
    try {
        const updateid = req.query.updateid;
        const { category, subcategory, title, description, tags } = req.body;
        if (updateid) {
            await extrasubcategoryModel.findByIdAndUpdate(updateid, {
                categoryId: category,
                subcategoryId: subcategory,
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/extrasubcategory');
        }
        await extrasubcategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            title: title,
            description: description,
            // image:req.file.filename,
            tags: tags
        });
        return res.redirect('/dashboard/create_extrasubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const ajaxCategoryWiseRecord = async (req, res) => {
    try {
        let categoryid = req.query.categoryId;
        let subcategory = await subcategoryModel.find({categoryId:categoryid}).populate('categoryId');
        return res.status(200).send({
            success:true,
            message: "record successfully fetch",
            subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteExtrasubcategory = async (req, res) => {
    try {
        const deleteid = req.query.deleteid;
        await extrasubcategoryModel.findByIdAndDelete(deleteid);
        return res.redirect('/dashboard/extrasubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const extrasubcategoryStatus = async (req, res) => {
    try {
        const { statusid, status } = req.query;
        if (status === "deactive") {
            await extrasubcategoryModel.findByIdAndUpdate(statusid, {
                status: "active"
            });
        } else {
            await extrasubcategoryModel.findByIdAndUpdate(statusid, {
                status: "deactive"
            });
        }
        return res.redirect('/dashboard/extrasubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const changesExtrasubcatByCheckboxes = async (req, res) => {
    try {
        const checkedid = req.body.extrasubcategory_checkbox;
        const { deactivate, activate, deleteExtrasubcat } = req.body;
        if (deactivate) {
            for (let i = 0; i < checkedid.length; i++) {
                await extrasubcategoryModel.findByIdAndUpdate(checkedid[i], {
                    status: "deactive"
                });
            }
        } else if (activate) {
            for (let i = 0; i < checkedid.length; i++) {
                await extrasubcategoryModel.findByIdAndUpdate(checkedid[i], {
                    status: "active"
                });
            }
        } else if (deleteExtrasubcat) {
            for (let i = 0; i < checkedid.length; i++) {
                await extrasubcategoryModel.findByIdAndDelete(checkedid);
            }
        }
        return res.redirect('/dashboard/extrasubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// extrasubcategory end 
// subcategory end 
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
    dashboardPage, crmAnalyticsPage, categoryPage, createCategoryPage, categoryCrud, deleteCategory, categoryStatus, changesCatByCheckboxes, subcategoryPage, createSubcategoryPage, subcategoryCrud, deleteSubcategory, subCategoryStatus, changesSubcatByCheckboxes, extarsubcategoryPage, createExtrasubcategoryPage, extrasubcategoryCrud, ajaxCategoryWiseRecord, deleteExtrasubcategory, extrasubcategoryStatus, changesExtrasubcatByCheckboxes, ordersPage, cryptocurrencyPage1, cryptocurrencyPage2, bankingPage1, bankingPage2, personalPage, cmsAnalyticsPage, influencerPage, travelPage, teacherPage, educationPage, authorsPage, doctorsPage, employeesPage, workspacesPage
}