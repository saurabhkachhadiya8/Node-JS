const userModel = require('../models/UserModel');
const categoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');
const extrasubcategoryModel = require('../models/ExtrasubcategoryModel');
const productModel = require('../models/ProductModel');

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
        await subcategoryModel.deleteMany({ categoryId: deleteid });
        await extrasubcategoryModel.deleteMany({ categoryId: deleteid });
        await productModel.deleteMany({ categoryId: deleteid });
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
            await subcategoryModel.deleteMany({ categoryId: checkedid });
            await extrasubcategoryModel.deleteMany({ categoryId: checkedid });
            await productModel.deleteMany({ categoryId: checkedid });
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
        const { categoryId, title, description, tags } = req.body;
        const category = await categoryModel.findById(categoryId);
        if (updateid) {
            await subcategoryModel.findByIdAndUpdate(updateid, {
                categoryId: categoryId,
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/subcategory');
        }
        await subcategoryModel.create({
            categoryId: categoryId,
            title: title,
            description: description,
            // image:req.file.filename,
            tags: tags,
            status: category.status
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
        await extrasubcategoryModel.deleteMany({ subcategoryId: deleteid });
        await productModel.deleteMany({ subcategoryId: deleteid });
        return res.redirect('/dashboard/subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const subCategoryStatus = async (req, res) => {
    try {
        const { statusid, status } = req.query;
        const subcategory = await subcategoryModel.findById(statusid);
        const category = await categoryModel.findById(subcategory.categoryId);
        if (status === "deactive") {
            if(category.status == 'active'){
                await subcategoryModel.findByIdAndUpdate(statusid, {
                    status: "active"
                });
            }else{
                await subcategoryModel.findByIdAndUpdate(statusid, {
                    status: "deactive"
                });
            }
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
                const subcategory = await subcategoryModel.findById(checkedid[i]);
                const category = await categoryModel.findById(subcategory.categoryId);
                if(category.status == 'active'){
                    await subcategoryModel.findByIdAndUpdate(checkedid[i], {
                        status: "active"
                    });
                }else{
                    await subcategoryModel.findByIdAndUpdate(checkedid[i], {
                        status: "deactive"
                    });
                }
            }
        } else if (deleteSubcat) {
            for (let i = 0; i < checkedid.length; i++) {
                await subcategoryModel.findByIdAndDelete(checkedid);
            }
            await extrasubcategoryModel.deleteMany({ subcategoryId: checkedid });
            await productModel.deleteMany({ subcategoryId: checkedid });
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
        const { categoryId, subcategoryId, title, description, tags } = req.body;
        if (updateid) {
            await extrasubcategoryModel.findByIdAndUpdate(updateid, {
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/extrasubcategory');
        }
        await extrasubcategoryModel.create({
            categoryId: categoryId,
            subcategoryId: subcategoryId,
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
        let subcategory = await subcategoryModel.find({ categoryId: categoryid }).populate('categoryId');
        return res.status(200).send({
            success: true,
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
        await productModel.deleteMany({ extrasubcategoryId: deleteid });
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
            await productModel.deleteMany({ extrasubcategoryId: checkedid });
        }
        return res.redirect('/dashboard/extrasubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// product start 
const productPage = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('categoryId').populate('subcategoryId').populate('extrasubcategoryId');
        return res.render('dashboard/category/product/view', {
            products
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const createProductPage = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        const subcategory = await subcategoryModel.find({});
        const extrasubcategory = await extrasubcategoryModel.find({});
        const editid = req.query.editid;
        let singleProduct = null;
        if (editid) {
            singleProduct = await productModel.findById(editid).populate('categoryId').populate('subcategoryId').populate('extrasubcategoryId');
        }
        return res.render('dashboard/category/product/create', {
            category,
            subcategory,
            extrasubcategory,
            singleProduct
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const productCrud = async (req, res) => {
    try {
        const updateid = req.query.updateid;
        const { categoryId, subcategoryId, extrasubcategoryId, title, description, tags } = req.body;
        if (updateid) {
            await productModel.findByIdAndUpdate(updateid, {
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                extrasubcategoryId: extrasubcategoryId,
                title: title,
                description: description,
                // image:req.file.filename,
                tags: tags
            });
            return res.redirect('/dashboard/product');
        }
        await productModel.create({
            categoryId: categoryId,
            subcategoryId: subcategoryId,
            extrasubcategoryId: extrasubcategoryId,
            title: title,
            description: description,
            // image:req.file.filename,
            tags: tags
        });
        return res.redirect('/dashboard/create_product');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const ajaxSubcategoryWiseRecord = async (req, res) => {
    try {
        let subcategoryid = req.query.subcategoryId;
        let extrasubcategory = await extrasubcategoryModel.find({ subcategoryId: subcategoryid }).populate('subcategoryId');
        return res.status(200).send({
            success: true,
            message: "record successfully fetch",
            extrasubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteProduct = async (req, res) => {
    try {
        const deleteid = req.query.deleteid;
        await productModel.findByIdAndDelete(deleteid);
        return res.redirect('/dashboard/product');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const productStatus = async (req, res) => {
    try {
        const { statusid, status } = req.query;
        if (status === "deactive") {
            await productModel.findByIdAndUpdate(statusid, {
                status: "active"
            });
        } else {
            await productModel.findByIdAndUpdate(statusid, {
                status: "deactive"
            });
        }
        return res.redirect('/dashboard/product');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const changesProductByCheckboxes = async (req, res) => {
    try {
        const checkedid = req.body.product_checkbox;
        const { deactivate, activate, deleteProduct } = req.body;
        if (deactivate) {
            for (let i = 0; i < checkedid.length; i++) {
                await productModel.findByIdAndUpdate(checkedid[i], {
                    status: "deactive"
                });
            }
        } else if (activate) {
            for (let i = 0; i < checkedid.length; i++) {
                await productModel.findByIdAndUpdate(checkedid[i], {
                    status: "active"
                });
            }
        } else if (deleteProduct) {
            for (let i = 0; i < checkedid.length; i++) {
                await productModel.findByIdAndDelete(checkedid);
            }
        }
        return res.redirect('/dashboard/product');
    } catch (err) {
        console.log(err);
        return false;
    }
}
// product end 
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
    dashboardPage, crmAnalyticsPage, categoryPage, createCategoryPage, categoryCrud, deleteCategory, categoryStatus, changesCatByCheckboxes, subcategoryPage, createSubcategoryPage, subcategoryCrud, deleteSubcategory, subCategoryStatus, changesSubcatByCheckboxes, extarsubcategoryPage, createExtrasubcategoryPage, extrasubcategoryCrud, ajaxCategoryWiseRecord, deleteExtrasubcategory, extrasubcategoryStatus, changesExtrasubcatByCheckboxes, productPage, createProductPage, productCrud, ajaxSubcategoryWiseRecord, deleteProduct, productStatus, changesProductByCheckboxes, ordersPage, cryptocurrencyPage1, cryptocurrencyPage2, bankingPage1, bankingPage2, personalPage, cmsAnalyticsPage, influencerPage, travelPage, teacherPage, educationPage, authorsPage, doctorsPage, employeesPage, workspacesPage
}