const userModel = require('../models/UserModel');
const productModel = require('../models/ProductModel');
const cartModel = require('../models/CartModel');
const fs = require('fs');

const dashboardPage = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.render('dashboard', {
            products
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addProPage = async (req, res) => {
    try {
        return res.render('add');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addProduct = async (req, res) => {
    try {
        const { name, price, quentity, description } = req.body;
        if (!name || !price || !quentity || !description || !req.file) {
            console.log("All Fields Are Required");
            return false;
        }
        await productModel.create({
            image: req.file?.path,
            name: name,
            price: price,
            quentity: quentity,
            description: description
        });
        console.log("Product Created Successfully");
        return res.redirect('/dashboard/addproduct');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteProduct = async (req, res) => {
    try {
        let deleteid = req.query.deleteid;
        let cartid = req.query.cartid;
        if (deleteid) {
            let single = await productModel.findById(deleteid);
            if (fs.existsSync(single?.image)) {
                fs.unlinkSync(single?.image);
            }
            await productModel.findByIdAndDelete(deleteid);
            await cartModel.deleteMany({ productId: deleteid });
            console.log("Product Deleted Successfully");
            return res.redirect('/dashboard');
        } else {
            await cartModel.findByIdAndDelete(cartid);
            console.log("Product Deleted Successfully");
            return res.redirect('/dashboard/addtocart');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const editProduct = async (req, res) => {
    try {
        let editid = req.query.editid;
        let single = await productModel.findById(editid);
        return res.render('edit', {
            single
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const updateProduct = async (req, res) => {
    try {
        const { updateid, name, price, quentity, description } = req.body;
        if (!name || !price || !quentity || !description) {
            console.log("All Fields Are Required");
            return false;
        }
        let single = await productModel.findById(updateid);
        if (req.file) {
            if (fs.existsSync(single?.image)) {
                fs.unlinkSync(single?.image);
            }
            await productModel.findByIdAndUpdate(updateid, {
                image: req.file?.path,
                name: name,
                price: price,
                quentity: quentity,
                description: description
            });
        } else {
            await productModel.findByIdAndUpdate(updateid, {
                image: single?.image,
                name: name,
                price: price,
                quentity: quentity,
                description: description
            });
        }
        console.log("Product Updated Successfully");
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addToCartPage = async (req, res) => {
    try {
        const cartProducts = await cartModel.find({});
        return res.render('addtocart', {
            cartProducts
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addToCart = async (req, res) => {
    try {
        const cartid = req.body.cartid;
        const single = await productModel.findById(cartid);
        await cartModel.create({
            productId: single?._id,
            image: single?.image,
            name: single?.name,
            price: single?.price,
            quentity: single?.quentity,
            description: single?.description
        });
        console.log("Product AddToCart Successfully");
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    dashboardPage, addProPage, addProduct, deleteProduct, editProduct, updateProduct, addToCartPage, addToCart
}