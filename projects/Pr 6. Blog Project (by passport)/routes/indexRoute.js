const express = require('express');
const routes = express.Router();

const { registerPage, loginPage, registerUser, loginUser, dashboardPage, addPage, addBlog, editBlog, updateBlog, deleteBlog, readmore, logoutUser } = require('../controllers/AuthController');

const passport = require('passport');

const multer = require('multer');
const st = multer.diskStorage({
    destination: (req, res, cb) => {
        return cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000000);
        return cb(null, `${file.fieldname}-${uniq}`)
    }
});
const fileUpload = multer({ storage: st }).single("image");

routes.get('/', loginPage);
routes.get('/register', registerPage);
routes.post('/registeruser', registerUser);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.get('/logout', logoutUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/add', passport.checkUser, addPage);
routes.post('/addblog', passport.checkUser, fileUpload, addBlog);
routes.get('/editblog', passport.checkUser, editBlog);
routes.post('/updateblog', passport.checkUser, fileUpload, updateBlog);
routes.get('/deleteblog', passport.checkUser, deleteBlog);
routes.get('/readmore', passport.checkUser, readmore);

module.exports = routes;