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

const getUserProfile = (req, res) => {
  //res.send("Success")
  User.findById(req.user._id)
    .then((user) =>
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    )
    .catch((error) => {
      res.json({ error: error, message: 'User not found' });
      res.status(404);
    });
};

module.exports = { findUsers, authUser, getUserProfile, registerUser };
