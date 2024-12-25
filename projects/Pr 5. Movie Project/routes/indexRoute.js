const express = require('express');
const routes = express.Router();
const { index, addPage, addTicket, viewPage, deleteTicket, editTicket, updateTicket } = require('../controllers/MovieController');

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

routes.get('/',index);
routes.get('/add',addPage);
routes.post('/addticket',fileUpload,addTicket);
routes.get('/view',viewPage);
routes.get('/deleteticket',deleteTicket);
routes.get('/editticket',editTicket);
routes.post('/updateticket',fileUpload,updateTicket);

module.exports = routes;