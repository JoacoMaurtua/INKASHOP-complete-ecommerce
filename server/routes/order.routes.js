const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {addOrderItems,getSingleOrder} = require('../controllers/order.controllers');

//Rutas:

router.post('/order',protect,addOrderItems); //crear una orden nueva

router.get('/order/:id',protect, getSingleOrder);


module.exports = router;
