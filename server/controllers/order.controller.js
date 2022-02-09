const Order = require('../models/order.models');
const asyncHandler = require('express-async-handler');

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems, 
    shippingAddress, 
    paymentMethod,
    itemsPrice, 
    taxPrice, 
    shippingPrice, 
    totalPrice
  } = req.body //Parametros que recibe el objeto order en order.models

  if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error('No order items')
    return
  } else{
    const order = new Order({
      cartItems,
      user: req.user._id, 
      shippingAddress, 
      paymentMethod,
      itemsPrice, 
      taxPrice, 
      shippingPrice, 
      totalPrice
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
});


module.exports = {addOrderItems};