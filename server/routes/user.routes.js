const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {findUsers,authUser, getUserProfile, registerUser, updateUserProfile,findSingleUser} = require('../controllers/user.controllers');

//Rutas:

router.get('/users',findUsers); //Obtiene todos los users
router.get('/:id',findSingleUser) //Obtiene un unico user
router.post('/register',registerUser);
router.post('/login',authUser);
router.get('/profile', protect, getUserProfile);
router.put('/updateProfile/:id',protect, updateUserProfile);

module.exports = router;
