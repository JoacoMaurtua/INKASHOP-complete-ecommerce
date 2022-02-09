const Order = require('../models/order.models');

const addOrderItems = (req, res) => {
  const {
    cartItems, 
    shippingAddress, 
    paymentMethod,
    itemsPrice, 
    taxPrice, 
    shippingPrice, 
    totalPrice
  } = req.body //Data de carga traida de reducers

  if(cartItems && cartItems.length === 0){
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
};


module.exports = {addOrderItems};