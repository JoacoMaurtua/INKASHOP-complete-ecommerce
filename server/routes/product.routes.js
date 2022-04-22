const express = require('express');

const {
  findProduct,
  findSingleProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} = require('../controllers/product.controllers');

const { protect, admin } = require('../config/authMiddleware.config');


const router = express();

//Rutas:

router.get('/products', findProduct); //encontrar todos los productos

router.get('/product/:id', findSingleProduct);//encontrar un solo producto

router.delete('/product/delete/:id',protect,admin,deleteProduct); //eliminar un productos

router.post('/product/create',protect,admin,createProduct); //crear un producto

router.put('/product/update/:id',protect,admin,updateProduct); //actualizar un producto

module.exports = router;
