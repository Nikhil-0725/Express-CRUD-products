const express = require('express');

const { listProduct, home } = require('../controllers/listProducts.controller');
const { addProducts } = require('../controllers/addProducts.controller');
const { delProducts } = require('../controllers/delProducts.controller');
const { productById } = require('../controllers/productById.controller');
const { updateProduct } = require('../controllers/updateProduct.controller');

const loginRouter = express.Router();

loginRouter.get('/', home);

loginRouter.get('/products',listProduct);

loginRouter.post('/products', addProducts);

loginRouter.delete('/products/prodId', delProducts);

loginRouter.put('/products/prodId', updateProduct);

loginRouter.get('/products/prodId', productById);


module.exports = loginRouter;