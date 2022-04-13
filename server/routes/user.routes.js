const express = require('express');
const router = express();
const { protect, admin } = require('../config/authMiddleware.config');
const {
  findUsers,
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  findSingleUser,
  deleteUser,
} = require('../controllers/user.controllers');

//Rutas:

router.get('/users', protect, admin, findUsers); //Obtiene todos los users
router.get('/user/:id', protect, findSingleUser); //Obtiene un unico user
router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile); // --> Se usar en getUserDetails(userActions.js)
router.put('/updateProfile', protect, updateUserProfile);
router.delete('/delete/:id',protect,admin,deleteUser); //eliminar un usuario(solo para admin)

module.exports = router;
