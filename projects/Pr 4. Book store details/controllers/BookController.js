const bookModel = require('../models/BookModel');

const insertData = async (req,res) => {
    const {name,price,pages,author,image,description} = req.body;
    try{
        await bookModel.create({
            
        })
    }catch(err){

    }
}
module.exports = {
    insertData
}