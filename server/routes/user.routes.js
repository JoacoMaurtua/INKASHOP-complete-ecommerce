const express = require('express');
const router = express();
const { protect } = require('../config/authMiddleware.config');
const {authUser, getUserProfile} = require('../controllers/user.controllers');

//Rutas:

router.post('/login',authUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
