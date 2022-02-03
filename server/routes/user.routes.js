const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {findUsers,authUser, getUserProfile, registerUser} = require('../controllers/user.controllers');

//Rutas:

router.get('/users',findUsers);
router.post('/register',registerUser);
router.post('/login',authUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
