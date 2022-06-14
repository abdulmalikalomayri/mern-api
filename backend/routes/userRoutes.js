/**
 * for each route that we have create it, it will have three default func
 * const express = require('express')
 * const router = express.Router()
 * module.exports = router
 */
// below code line is like import express to use node express package and featuers
const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/userController');

// controller handle register  
 
router.route('/').get(registerUser);

module.exports = router