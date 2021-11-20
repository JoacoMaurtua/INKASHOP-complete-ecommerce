const Product = require('../models/product.models');

const findProduct = (req, res) => {
  Product.find({})
    .then((product) => res.json(product))
    .catch((error) => {
      res.json({ error: error, menssage: 'Productos no encontrados' });
      res.sendStatus(404);
    });
};

const findSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((error) => {
      res.json({ error: error, menssage: 'Productos no encontrados' });
      res.sendStatus(404);
    });
};


module.exports = {findProduct,findSingleProduct};