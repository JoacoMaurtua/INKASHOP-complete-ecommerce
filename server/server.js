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

//Conexion con la base de datos:
const connectDB = require('./config/mongodb.config');
connectDB(); //-->Llama a la funcion asincrona




app.listen(PORT,()=>{
  console.log(`1: Servidor corriendo en ${process.env.NODE_ENV} en el puerto ${PORT}`)
});