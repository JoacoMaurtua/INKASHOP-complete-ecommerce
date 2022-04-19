const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {
  addOrderItems,
  getSingleOrder,
  updateOrderToPaid,
  getMyOrders,
} = require('../controllers/order.controllers');

//Rutas:
router.get('/order/myorders', protect, getMyOrders); //devolver las ordenes del usuario logueado

router.post('/order', protect, addOrderItems); //crear una orden nueva

router.get('/order/:id', protect, getSingleOrder); //devolver una orden ya creada

router.put('/order/:id/pay', protect, updateOrderToPaid); //actualizar una orden

module.exports = router;
