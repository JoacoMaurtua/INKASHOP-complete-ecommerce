const express = require('express');

const router = express();

const {authUser} = require('../controllers/user.controllers');

//Rutas:

router.post('/login',authUser)


module.exports = router;
