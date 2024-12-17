const express = require('express');

const routes = express.Router();
const { insertData } = require('../controllers/BookController');

routes.get('/',insertData);

module.exports = routes;