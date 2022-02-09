const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {addOrderItems} = require('../controllers/order.controllers');

//Rutas:


router.post('/orders',protect,addOrderItems);


module.exports = router;
