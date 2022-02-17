const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {addOrderItems,getSingleOrder,updateOrderToPaid} = require('../controllers/order.controllers');

//Rutas:

router.post('/order',protect,addOrderItems); //crear una orden nueva

router.get('/order/:id',protect, getSingleOrder); //devolver una orden ya creada

router.put('/order/:id/pay',protect,updateOrderToPaid) //actualizar una orden

module.exports = router;
