const express = require('express');

const {findProduct,findSingleProduct} = require('../controllers/product.controllers');

const router = express();

//Rutas:

router.get('/products',findProduct);

router.get('/product/:id',findSingleProduct);


module.exports = router;