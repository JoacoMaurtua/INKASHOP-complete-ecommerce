require('dotenv').config();
const products = require('./data/products');

const express = require('express');

const app = express();

const PORT = process.env.PORT;

/* app.get('/',(req,res)=>{
  res.send('API is running...')
}); */


//Conexion con la base de datos:
const connectDB = require('./config/mongodb.config');
connectDB(); //-->Llama a la funcion asincrona

//Middlewares:



//Conectando con rutas:
app.use('/api', require('./routes/product.routes'));




app.listen(PORT,()=>{
  console.log(`1: Servidor corriendo en ${process.env.NODE_ENV} en el puerto ${PORT}`)
});