const User = require('../models/user.models');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');


//GET ALL USERS
const findUsers = (req, res) => {
  User.find({})
    .then((user) => res.json(user))
    .catch((error) => {
      res.json({ error: error, message: 'Usuarios no encontrados' });
      res.sendStatus(404);
    });
};

//GET SINGLE USER
const findSingleUser = (req,res) =>{
  User.findOne({_id:req.params.id}).select('-password')
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'User not found'})
        res.sendStatus(404)
      })
};

//LOGIN
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //res.send({email,password}) //EJEMPLO

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    //Si el usuario existe y las contraseñas coinciden
    res.json({
      message: 'Correct Login',
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
    
  } else {
    res.status(401);
    res.json({ error: true, message: 'Invalid email or password' });;
  }
});

//REGISTER
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).then((userExist) => {
    if (userExist) {
      res.status(400);
      res.json({ error: true, message: 'User already exists' });
    } else {
      User.create({
        name,
        email,
        password,
      })
        .then((user) => {
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            password: user.password,
            token: generateToken(user._id),
          });
        })
        .catch((error) => {
          res.json({ error: error, message: 'Invalidate user data' });
          res.status(400);
        });
    }
  });
});

// GET A SIMPLE USER PROFILE

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

//UPDATE USER PROFILE

  const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}) 




module.exports = { findUsers, authUser, getUserProfile, registerUser, updateUserProfile,findSingleUser };
