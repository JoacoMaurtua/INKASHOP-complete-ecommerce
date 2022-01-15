const User = require('../models/user.models');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const authUser = asyncHandler(async (req, res) => {
  const {email,password} = req.body

  //res.send({email,password}) //EJEMPLO

  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password))){ //Si el usuario existe y las contraseñas coinciden
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else{
      res.status(401);
      throw new Error('Invalid email or password')
  }
}) 


module.exports = {authUser}