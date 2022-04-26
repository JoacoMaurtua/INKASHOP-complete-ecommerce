require('dotenv').config();
const products = require('./data/products');

const express = require('express');

const app = express();

const PORT = process.env.PORT;
 
const path = require('path');

/*  Morgan es un middleware para poder ver en la consola las solicitudes que hagan los usuarios a la DB */
const morgan = require('morgan');

//Conexion con la base de datos:
const connectDB = require('./config/mongodb.config');
connectDB(); //-->Llama a la funcion asincrona

//Middleware para consologuear solicitudes HTTP
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev')) //
}//luego cambiar a production

//Middlewares para realizar consulta POST
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Conectando con rutas:
app.use('/api', require('./routes/product.routes'));

app.use('/api', require('./routes/user.routes'));

app.use('/api', require('./routes/order.routes'));

app.use('/api', require('./routes/uploads.routes'));

app.get('/api/config/paypal', (req, res) => //PayPal
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//configuracion para volver un directorio estatico
//const __dirname = path.resolve() //---> ya esta declarada en global namespace
const __beStatic = path.resolve();

app.use('/uploads', express.static(path.join(__beStatic ,'/uploads'))) 
    

app.listen(PORT,()=>{
  console.log(`1: Servidor corriendo en ${process.env.NODE_ENV} en el puerto ${PORT}`)
});

/*
  PASOS PARA USAR PAYPAL:
  1) CREO UNA CUENTA DE INKASHOP EN SANDBOX
  2) ACCEDO AL ENDPOINT DESDE EL SERVER

*/