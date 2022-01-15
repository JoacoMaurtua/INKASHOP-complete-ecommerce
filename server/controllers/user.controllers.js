const User = require('../models/user.models');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

//LOGIN
const authUser = asyncHandler(async (req, res) => {
  const {email,password} = req.body

  //res.send({email,password}) //EJEMPLO

  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password))){ //Si el usuario existe y las contraseñas coinciden
    res.json({
      message:"Correct Login",      
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

//REGISTER
const registerUser = asyncHandler(async (req, res) => {
  const {name,email,password} = req.body

  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password //plain text por ahora
  })

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  }else{
      res.status(400)
      throw new Error('Invalid user data')
  }
  
}) 

const getUserProfile = (req, res) => {
  //res.send("Success")
  User.findById(req.user._id)
    .then(user => res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    }))
    .catch((error) => {
      res.json({ error: error, message: 'User not found' });
      res.status(404);
    })
}


module.exports = {authUser, getUserProfile,registerUser}
