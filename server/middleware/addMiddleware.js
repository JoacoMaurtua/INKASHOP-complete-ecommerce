const jwt = require('jsonwebtoken');

const User = require('../models/user.models');

const asyncHandler = require('express-async-handler');

//MIDDLEWARE PARA VALIDAR EL TOKEN

const protect = asyncHandler(async(req, res, next)=>{
  let token 

  if(req.headers.authorization){
    
    try{
      token = req.headers.authorization

      console.log('token: ',token)

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password') //buscar por el ID y selecciona el password de esa data

      console.log(decoded)

      next();

    }catch(error){
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if(!token){
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  console.log(req.header.authorization)

  next();
})

module.exports = {protect};