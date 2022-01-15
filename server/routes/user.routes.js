const express = require('express');

const router = express();

const { authUser, getUserProfile } = require('../controllers/user.controllers');

const { protect } = require('../middleware/addMiddleware');

//Rutas:

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile);

module.exports = router;
