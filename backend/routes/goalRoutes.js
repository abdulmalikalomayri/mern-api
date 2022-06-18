
// below code line is like import express to use node express package and featuers
const express = require('express');
// import controllers
const { getGoals, setGoal, updateGoal, deleteGoal, showGoal } = require('../controllers/goalController');
const router = express.Router();
// import auth middlware which let us force the user to login to get goals 
const { protect } = require('../middleware/authMiddleware');
// we only need to add 2nd param protect to let the golas private 

// so router.get method has two pram 1- is the route 2- is the response 
// @post api/goal; @get api/goal
// router.route('/').get( getGoals).post(setGoal);

router.put('/:id',protect, updateGoal);

router.get('/',protect ,getGoals);
router.post('/',protect, setGoal);
router.get('/:id',protect, showGoal);

router.delete('/:id',protect, deleteGoal);


module.exports = router;