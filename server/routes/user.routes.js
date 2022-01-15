const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {authUser, getUserProfile, registerUser} = require('../controllers/user.controllers');

//Rutas:

router.post('/register',registerUser);
router.post('/login',authUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
