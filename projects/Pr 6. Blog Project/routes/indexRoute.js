const express = require('express');
const routes = express.Router();

const { registerPage, loginPage, registerUser, loginUser, dashboardPage, addPage, addBlog, editBlog, updateBlog, deleteBlog, readmore } = require('../controllers/AuthController');

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

routes.get('/', registerPage);
routes.get('/login', loginPage);
routes.post('/registeruser', registerUser);
routes.post('/loginuser', loginUser);
routes.get('/dashboard', dashboardPage);
routes.get('/add', addPage);
routes.post('/addblog', fileUpload, addBlog);
routes.get('/editblog', editBlog);
routes.post('/updateblog', fileUpload, updateBlog);
routes.get('/deleteblog', deleteBlog);
routes.get('/readmore', readmore);

module.exports = routes;