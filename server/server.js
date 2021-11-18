//require('dotenv').config();

const express = require('express');
const products = require('./data/products');

const app = express();

const PORT = 8000;


app.get('/',(req,res)=>{
  res.send('API is running...')
});

app.get('/api/products',(req,res)=>{
  res.json(products)
});

app.get('/api/products/:id',(req,res)=>{
  const product = products.find(p=>p._id === req.params.id)
  res.json(product)
})






//Conexion con el servidor:
app.listen(PORT,()=>{
  console.log(`1: Server corriendo en el puerto ${PORT}`)
});