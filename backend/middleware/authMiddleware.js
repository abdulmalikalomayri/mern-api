const jwt = require('jwt');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Here we use Token that start with Bearer
const protect = asyncHandler (async (req, res) => {
    let token

    if(req.headers.authorization && req.header.authorization.startsWith('Bearer')){
        try {
            // Get token from header 
            token = req.headers.authorization.split(' ')[1];

            // Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from token
            req.user = await User.findById(decoded).select('-password');
            
            next();
        } catch(error) {
            console.log(error);
            req.statusCode("401");
            
            throw new Error('Invalid auth');
        }     
    }
    if(!token) {
        res.status(401);
        throw new Error('Not Authorize');
    }
});

module.exports = { protect }