const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const connect = await mongoose.connect(`mongodb+srv://SaurabhKachhadiya:SaurabhKachhadiya@cluster0.7att4.mongodb.net/Book-Store`);
        console.log(`MongoDB Connect in host ${connect.connection.host}`);
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = connectDB;