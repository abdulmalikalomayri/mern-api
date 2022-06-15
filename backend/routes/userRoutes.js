/**
 * for each route that we have create it, it will have three default func
 * const express = require('express')
 * const router = express.Router()
 * module.exports = router
 */
// below code line is like import express to use node express package and featuers
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController');

// controller handle register  
// 
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe)

// router.route('/').post()

module.exports = router;