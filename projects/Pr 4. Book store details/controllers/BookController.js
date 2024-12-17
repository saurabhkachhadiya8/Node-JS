const bookModel = require('../models/BookModel');

const viewPage = async (req, res) => {
    try{
        let allData = await bookModel.find({});
        return res.render('view',{
            allData
        });
    }catch(err){
        console.error(err);
        return false;
    }
}
const addPage = (req, res) => {
    return res.render('add');
}
const insertData = async (req, res) => {
    try {
        await bookModel.create({
            name: req.body.name,
            price: req.body.price,
            pages: req.body.pages,
            author: req.body.author,
            image: req.file.filename,
            description: req.body.description
        });
        console.log("Book added successfully");
        return res.redirect('/add');
    } catch (err) {
        if (err) {
            console.log(err);
            return false;
        }
    }
}
module.exports = {
    viewPage, addPage, insertData
}