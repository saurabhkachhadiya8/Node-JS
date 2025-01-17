const userModel = require('../models/UserModel');
const blogModel = require('../models/BlogModel');
const fs = require('fs');
const path = require('path');

const registerPage = (req, res) => {
    if (res.locals?.users) {
        return res.redirect('/dashboard');
    }
    return res.render('register');
}
const loginPage = (req, res) => {
    if (res.locals?.users) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}
const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, password, confirmpass } = req.body;
        if (!firstname || !lastname || !email || !phone || !password || !confirmpass) {
            console.log('All Fields Are Required');
            return res.redirect('/register');
        } else {
            if (password != confirmpass) {
                console.log('Password and Confirm Password Does Not Match');
                return res.redirect('/register');
            } else {
                await userModel.create({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phone: phone,
                    password: password,
                });
                console.log('Register Successful');
                return res.redirect('/');
            }
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = async (req, res) => {
    try {
        // const { emailorphone, password } = req.body;
        // if (!emailorphone || !password) {
        //     console.log('All Fields Are Required');
        //     return res.redirect('/');
        // }
        // let user = null;
        // if (!isNaN(emailorphone) && /^\d+$/.test(emailorphone)) {
        //     user = await userModel.findOne({ phone: Number(emailorphone), password: password });
        //     if (!user) {
        //         console.log('Invalid Phone or Password');
        //         return res.redirect('/');
        //     }
        // } else {
        //     user = await userModel.findOne({ email: emailorphone, password: password });
        //     if (!user) {
        //         console.log('Invalid Email or Password');
        //         return res.redirect('/');
        //     }
        // }
        // res.cookie('auth', user);
        console.log('Login Successful');
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log('Logout Successful');
        return res.redirect('/');
    });
}
const dashboardPage = async (req, res) => {
    try {
        let blogs = await blogModel.find({});
        return res.render('dashboard', {
            blogs
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addPage = (req, res) => {
    return res.render('add');
}
const addBlog = async (req, res) => {
    try {
        await blogModel.create({
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename
        });
        console.log('Blog Added Successfully');
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const editBlog = async (req, res) => {
    try {
        let id = req.query.editId;
        let single = await blogModel.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const updateBlog = async (req, res) => {
    try {
        let id = req.body.updateId;
        let old = await blogModel.findById(id);
        if (req.file) {
            fs.unlinkSync(path.join(__dirname, '../uploads', old.image));
            await blogModel.findByIdAndUpdate(id, {
                title: req.body.title,
                description: req.body.description,
                image: req.file.filename
            });
        } else {
            await blogModel.findByIdAndUpdate(id, {
                title: req.body.title,
                description: req.body.description,
                image: old.image
            });
        }
        console.log('Blog Updated Successfully');
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteBlog = async (req, res) => {
    try {
        let id = req.query.deleteId;
        let old = await blogModel.findById(id);
        fs.unlinkSync(path.join(__dirname, '../uploads', old.image));
        await blogModel.findByIdAndDelete(id);
        console.log('Blog Deleted Successfully');
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const readmore = async (req, res) => {
    try {
        let id = req.query.readmoreId;
        let single = await blogModel.findById(id);
        res.render('readmore', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    registerPage, loginPage, registerUser, loginUser, dashboardPage, addPage, addBlog, editBlog, updateBlog, deleteBlog, readmore, logoutUser
}