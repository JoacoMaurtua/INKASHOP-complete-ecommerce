const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {addOrderItems,getSingleOrder,updateOrderToPaid,getMyOrders} = require('../controllers/order.controllers');

//Rutas:

router.post('/order',protect,addOrderItems); //crear una orden nueva

router.get('/order/:id',protect, getSingleOrder); //devolver una orden ya creada

router.get('/myorders',protect,getMyOrders); //devolver todas las ordenes del usuario

router.put('/order/:id/pay',protect,updateOrderToPaid) //actualizar una orden

module.exports = router;
