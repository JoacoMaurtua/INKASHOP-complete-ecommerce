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


//Crear un producto -ADMIN-
const createProduct = asyncHandler(async (req, res) => {
  //Prueba
  const product = new Product({
    name: 'Sample name',
    price:0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description'

  })
  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
});

/* 
  VERISON ALTERNATIVA:
  const createProduct = async(req,res) =>{
  Product.create(req.body)
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not create a task'})
        res.sendStatus(500);
      })
};
*/

//Actualizar un producto -ADMIN-
const updateProduct = asyncHandler(async (req, res) => {
  const {name,price,description,image,brand,category,countInStock} = req.body

  const product = await Product.findById(req.params.id)

  if(product){
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)

  }else{
    res.status(404)
    throw new Error('Product not found')
  }

});


module.exports = {findProduct,findSingleProduct,deleteProduct,createProduct,updateProduct};