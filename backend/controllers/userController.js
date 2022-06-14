const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
 
const registerUser = ( (req, res) => {
    res.json({message: 'Register User'})
    res.status(200)
} );

module.exports = {
    registerUser
}