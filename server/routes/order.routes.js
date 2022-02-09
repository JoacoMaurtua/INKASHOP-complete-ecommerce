const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {addOrderItems} = require('../controllers/order.controller');

//Rutas:


router.post('/',protect,addOrderItems);


module.exports = router;
