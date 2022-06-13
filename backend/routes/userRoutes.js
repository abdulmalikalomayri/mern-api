/**
 * for each route that we have create it, it will have three default func
 * const express = require('express')
 * const router = express.Router()
 * module.exports = router
 */
// below code line is like import express to use node express package and featuers
const express = require('express')
const router = express.Router()

// controller handle register  
const { registerUser } = require('../controllers/userController')

router.post('/', registerUser)

module.exports = router