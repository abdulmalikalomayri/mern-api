const asyncHandler = require('express-async-handler');

// import the db 
const Goal = require('../models/goalModel');
const User = require('../models/userModel');
/**
 * @desc Get All 
 * @route ./api/goals
 * @access private 
 * @param {*} req 
 * @param {*} res 
*/
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
  
    res.status(200).json(goals)
  })

/**
 * @desc Create  
 * @route ./api/goals
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)

        throw new Error('empty text body!')
    }

    const goal = await Goal.create({
        text: req.body.text,
        // add auth to user goals
        user: req.user.id,
    })
     res.status(200).json(goal)

})

/**
 * Update
 * @route ./api/goal/:id
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
         
        throw new Error("Goal Id not found ")
    }
    if(!req.body.text) {
        res.status(400)

        throw new Error('empty text body!')
    }

    // Validate User
    if(!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // validate user & goal
    if(goal.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('User not auth');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    res.status(200).json(updatedGoal)
})

const showGoal = asyncHandler(async (req, res) => {
    // Get id from praram 
    const goal = await Goal.findById(req.params.id)

    if(!goal) {

        throw new Error("Wrong ID!")
    }
    res.status(200).json(goal)
} )

/**
 * @route ./api/goal/:id
 * @desc delete goal
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const deleteGoal = asyncHandler (async (req, res) => {
    // get input
    const inputId = req.params.id;
    const goal = await Goal.findById(inputId)

    // validate 
    if(!goal) {
        throw new Error(`ID:${inputId} not found`)
    }
 
    // Validate User
    if(!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // validate user & goal
    if(goal.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('User not auth');
    }
    await goal.remove();
    // action
    // deleteGoal = await Goal.findByIdAndDelete(inputId)
    res.status(200).json({ id: req.params.id })
})

  module.exports = {
      getGoals, setGoal, updateGoal, deleteGoal, showGoal
  }