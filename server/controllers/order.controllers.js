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
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

/*  const addOrderItems = async(req,res) =>{
  Order.create(req.body)
       .then(results => res.json({data:results}))
       .catch(error=>{
         res.json({error:error, message:'Could not create a new order'})
         res.sendStatus(500);
       })
 };  */

 const getSingleOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  console.log({order:order})

  if(order){
    res.json(order)
  }else{
    res.status(404)
    throw new Error('Order not found')
  }
});

module.exports = { addOrderItems, getSingleOrder };
