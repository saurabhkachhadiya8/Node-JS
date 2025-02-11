const express = require('express');
const routes = express.Router();

const { dashboardPage, addProPage, addProduct, deleteProduct, editProduct, updateProduct, addToCartPage, addToCart } = require('../controllers/DashboardController');

const proImage = require('../middleware/multer');

routes.get('/',dashboardPage);
routes.get('/addproduct',addProPage);
routes.post('/add_product',proImage.single('image'),addProduct);
routes.get('/deleteproduct',deleteProduct);
routes.get('/editproduct',editProduct);
routes.post('/update_product',updateProduct);

routes.get('/addtocart',addToCartPage);
routes.post('/add_to_cart',addToCart);

module.exports = routes;