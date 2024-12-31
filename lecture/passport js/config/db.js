const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        let connect = await mongoose.connect(`mongodb+srv://SaurabhKachhadiya:SaurabhKachhadiya@cluster0.7att4.mongodb.net/Blog-Project`);
        console.log(`MongoDB Connected on host :- ${connect.connection.host}`);
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = connectDB;