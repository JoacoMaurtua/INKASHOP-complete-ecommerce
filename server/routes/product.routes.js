const express = require('express');

const {
  findProduct,
  findSingleProduct,
  deleteProduct,
} = require('../controllers/product.controllers');

const { protect, admin } = require('../config/authMiddleware.config');


const router = express();

//Rutas:

router.get('/products', findProduct); //encontrar todos los productos

router.get('/product/:id', findSingleProduct);//encontrar un solo producto

router.delete('/product/delete/:id',protect,admin,deleteProduct);


module.exports = router;
