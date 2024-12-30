const blogModel = require('../modles/BlogModel');

const dashboardPage = async(req,res) => {
    try{
        return res.render('dashboard');
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {
    dashboardPage
}