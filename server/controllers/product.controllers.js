const Product = require('../models/product.models');

const asyncHandler = require('express-async-handler');

const findProduct = (req, res) => {
  Product.find({})
    .then((product) => res.json(product))
    .catch((error) => {
      res.json({ error: error, message: 'Productos no encontrados' });
      res.sendStatus(404);
    });
};

const findSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((error) => {
      res.json({ error: error, message: 'Productos no encontrados' });
      res.sendStatus(404);
    });
};

//IMPORTANTE PARA LA SIGUIENTE ESCALA: 
/* 
  Por ahora cualquier admin puede editar y eliminar todos los productos
  esto debe modificarse para que solo unos puedan editar o eliminar los
  productos que ellos postean
*/
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(product){
    await product.remove()
    res.json({message:'Product removed'})
  }else{
    res.status(404)
    throw new Error('Product not found')
  }

})


module.exports = {findProduct,findSingleProduct,deleteProduct};