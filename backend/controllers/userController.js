// let import the packages that we have just installed 
// jwt json web token 
const jwt = require('jsonwebtoken');
// for hashing the password we use bcryptjs
const bcrypt = require('bcryptjs');
// asyncHandler
// to use user model to minpult db we need to import it
const asyncHandler = require('express-async-handler');
// we need to make the controller funcs async bcz we are working with mongos
const User = require('../models/userModel');
 
/**
 * @desc Register new user
 * @route POST /api/users
 * @access Public 
 */
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all field");
    }

    res.json({message: 'Register User'})
    res.status(200)
} );

/**
 * @desc Login a user
 * @route POST /api/users/login
 * @access Public 
 */
 const loginUser = asyncHandler ( async (req, res) => {
    res.json({message: 'Login User'})
    res.status(200)
} );

/**
 * @desc Get user data
 * @route Get /api/users/login/me
 * @access Public 
 */
 const getMe = asyncHandler( async (req, res) => {
    res.json({message: 'User Data'})
    res.status(200)
} );


module.exports = {
    registerUser, loginUser, getMe

}