const movieModel = require('../models/MovieModel');
const movieApi = require('../config/movieApi.json');
const fs = require('fs');
const path = require('path');

const index = async (req, res) => {
    try {
        const movies = await movieApi;
        return res.render('index', {
            movies: movieApi.movies,
            slider: movieApi.slider
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addPage = async (req, res) => {
    return res.render('add');
}
const addTicket = async (req, res) => {
    try {
        await movieModel.create({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            description: req.body.description
        });
        console.log('Ticket Added Successfully');
        return res.redirect('/view');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const viewPage = async (req, res) => {
    try {
        let tickets = await movieModel.find({});
        return res.render('view',{
            tickets
        })
    }catch (err) {
        console.log(err);
        return false;
    }
}
const deleteTicket = async(req,res) => {
    try{
        let id = req.query.deleteId;
        let single = await movieModel.findById(id);
        fs.unlinkSync(path.join(__dirname,'../uploads',single.image));
        await movieModel.findByIdAndDelete(id);
        console.log('Ticket Deleted Successfully');
        return res.redirect('/view');
    }catch(err){
        console.log(err);
        return false;
    }
}
const editTicket = async(req,res) => {
    try{
        let id = req.query.editId;
        let single = await movieModel.findById(id);
        return res.render('edit',{
            single
        });
    }catch(err){
        console.log(err);
        return false;
    }
}
const updateTicket = async(req,res) => {
    try{
        let id = req.body.updateId;
        if(req.file){
            let single = await movieModel.findById(id);
            fs.unlinkSync(path.join(__dirname,'../uploads',single.image));
            await movieModel.findByIdAndUpdate(id,{
                name: req.body.name,
                price: req.body.price,
                image: req.file.filename,
                description: req.body.description
            });
            console.log('Ticket Updated Successfully');
            return res.redirect('/view');
        }else{
            let single = await movieModel.findById(id);
            await movieModel.findByIdAndUpdate(id,{
                name: req.body.name,
                price: req.body.price,
                image: single.image,
                description: req.body.description
            });
            console.log('Ticket Updated Successfully');
            return res.redirect('/view');
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    index, addPage, addTicket, viewPage,deleteTicket,editTicket,updateTicket
}