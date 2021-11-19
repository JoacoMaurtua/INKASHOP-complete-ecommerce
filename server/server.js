require('dotenv').config();
const products = require('./data/products');

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
  res.send('API is running...')
});

app.get('/api/products',(req,res)=>{
  res.json(products);
})

app.get('/api/products/:id',(req,res)=>{
  const product = products.find((p)=>p._id === req.params.id)
  res.json(product);
})






app.listen(PORT,()=>{
  console.log(`1: Servidor corriendo en el puerto ${PORT}`)
});