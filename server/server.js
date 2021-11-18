//require('dotenv').config();

const express = require('express');

const app = express();

const PORT = 8000;









//Conexion con el servidor:
app.listen(PORT,()=>{
  console.log(`1: Server corriendo en el puerto ${PORT}`)
});