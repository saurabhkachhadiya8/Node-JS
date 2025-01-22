const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, '../uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        console.log(file.fieldname + '-' + uniqueSuffix);
        
        return cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

module.exports = multer({ storage: storage });