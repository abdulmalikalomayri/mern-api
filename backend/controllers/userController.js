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
 
// As you can see for each controllers func we include asyncHandler which handling the sync exception 
// Also we have include async just to makes tha funcs asyncorize  

/**
 * @desc Register new user
 * @route POST /api/users
 * @access Public 
 */
const registerUser = asyncHandler(async (req, res) => {
    // Destructuring: let us defined a variables from existing array 
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all field");
    }

    // when dealing with async func we sometimes use await 
    // static func from obj User.findOne
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status('400');
        throw new Error('User already exists\n try login in');
    }
    
    // password hashing
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),

        })
    } 
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }

} );

/**
 * @desc Login a user
 * @route POST /api/users/login
 * @access Public 
 */
 const loginUser = asyncHandler ( async (req, res) => {

    const { email, password} = req.body;
    const user = await User.findOne({email});

   // const passwordHashed = await bcrypt.compare(password, user.password);

    // if(user && passwordHashed) {
    //     res.json({
    //         _id: id,
    //         name: user.name,
    //         email: email
    //     });
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),

        });
    } else {
        res.status(400);

        throw new Error("Invalid login");
    } 
} );

/**
 * @desc Get user data
 * @route Get /api/users/login/me
 * @access Public 
 */
 const getMe = asyncHandler( async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users);
} );

// Generate JWT
 const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '360d',
    })
 }

module.exports = {
    registerUser, loginUser, getMe

}